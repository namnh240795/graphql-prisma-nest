import { ErrorService, ERROR_CODE } from './../error.service';
import { HashingService } from 'src/hashing.service';
import { Injectable } from '@nestjs/common';
import { isEmail } from 'class-validator';
import { PrismaService } from 'src/prisma.service';
import { LoginInput } from './dto/login.input';
import { JwtService } from '@nestjs/jwt';
import * as dayjs from 'dayjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly hashingService: HashingService,
    private readonly jwtService: JwtService,
    private readonly errorService: ErrorService,
  ) {}

  async validateEmailOrPhone(email_or_phone: string) {
    if (isEmail(email_or_phone)) {
      return {
        isEmail: true,
      };
    }
    if (
      /^(03[2-9]|05[689]|07[06789]|08[1-9]|09[0-9])([0-9]{7,9})$/.test(
        email_or_phone,
      )
    ) {
      return {
        isPhone: true,
      };
    }

    this.errorService.throwNotFoundRequest(ERROR_CODE.ACCOUNT_NOT_FOUND);
  }

  async login(loginInput: LoginInput) {
    const validator = await this.validateEmailOrPhone(
      loginInput.email_or_phone,
    );

    let account;

    if (validator.isEmail) {
      account = await this.prismaService.account.findUnique({
        where: { email: loginInput.email_or_phone },
      });
    } else if (validator.isPhone) {
      account = await this.prismaService.account.findUnique({
        where: { phone: loginInput.email_or_phone },
      });
    }

    if (!account) {
      this.errorService.throwBadRequest(
        ERROR_CODE.AUTHENTICATION_USER_NOT_FOUND,
      );
    }

    const isMatch = await this.hashingService.match(
      loginInput.password,
      account.password,
    );

    if (!isMatch) {
      this.errorService.throwBadRequest(
        ERROR_CODE.AUTHENTICATION_USER_NOT_FOUND,
      );
    }

    const payload = {
      username: account.email,
      id: account.id,
    };
    const refreshTokenPayload = {
      id: account.id,
      expires_in: dayjs(new Date()).add(7, 'day').toISOString(),
    };

    const token = this.jwtService.sign(payload);
    const refresh_token = this.jwtService.sign(refreshTokenPayload);

    return {
      token,
      refresh_token,
    };
  }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // // update(id: number, updateAuthInput: UpdateAuthInput) {
  // //   return `This action updates a #${id} auth`;
  // // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
