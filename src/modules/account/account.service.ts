import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { HashingService } from 'src/share_modules/hashing.service';
import { PrismaService } from 'src/share_modules/prisma.service';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';
import { ErrorService, ERROR_CODE } from 'src/share_modules/error.service';

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
      select: { _count: true },
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

  findAll() {
    return `This action returns all account`;
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountInput: UpdateAccountInput) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return this.prismaService.account.delete({ where: { id } });
  }
}
