import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { HashingService } from 'src/share_modules/hashing.service';
import { PrismaService } from 'src/share_modules/prisma.service';
import { CreateAccountInput } from './dto/create-account.input';
import { ErrorService, ERROR_CODE } from 'src/share_modules/error.service';
import { ChangePasswordInput } from './dto/change-password-account.input';
import { AccountInput } from './dto/account.input';

@Injectable()
export class AccountService {
  constructor(
    private readonly hashingService: HashingService,
    private readonly prismaService: PrismaService,
    private readonly errorService: ErrorService,
  ) {}

  async create(
    createAccountInput: CreateAccountInput,
    fields: Prisma.accountSelect,
  ) {
    const hashedPassword = await this.hashingService.hash(
      createAccountInput.password,
    );

    const checkExist = await this.prismaService.account.findMany({
      where: {
        OR: [
          { phone: { equals: createAccountInput.phone } },
          { email: { equals: createAccountInput.email } },
        ],
      },
    });

    if (checkExist.length > 0) {
      this.errorService.throwBadRequest(
        ERROR_CODE.ACCOUNT_PHONE_OR_EMAIL_ALREADY_EXIST,
      );
    }

    createAccountInput.password = hashedPassword;
    const account = await this.prismaService.account.create({
      data: createAccountInput,
      select: fields,
    });

    return account;
  }

  async findAll(account_input: AccountInput, fields) {
    const [accounts, total] = await Promise.all([
      this.prismaService.account.findMany({
        skip: account_input.skip,
        take: account_input.take,
        select: fields.accounts,
      }),
      this.prismaService.role.count(),
    ]);

    return {
      take: account_input.take,
      skip: account_input.skip,
      total,
      accounts,
    };
  }

  findOne(id: number, fields: Prisma.accountSelect) {
    return this.prismaService.account.findUnique({
      where: { id },
      select: fields,
    });
  }

  async changePassword(
    id: number,
    change_password_input: ChangePasswordInput,
    fields: Prisma.accountSelect,
  ) {
    const account = await this.prismaService.account.findUnique({
      where: { id },
    });

    const isMatch = await this.hashingService.match(
      change_password_input.old_password,
      account.password,
    );

    if (!isMatch) {
      this.errorService.throwBadRequest(ERROR_CODE.ACCOUNT_PASSWORD_NOT_MATCH);
    }

    const new_password = await this.hashingService.hash(
      change_password_input.new_password,
    );

    return this.prismaService.account.update({
      where: { id },
      data: { password: new_password },
      select: fields,
    });
  }

  remove(id: number) {
    return this.prismaService.account.delete({ where: { id } });
  }
}
