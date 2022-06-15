import { Injectable } from '@nestjs/common';
import { STATUS } from 'src/common/status';
import { HashingService } from 'src/hashing.service';
import { PrismaService } from 'src/prisma.service';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';
import { ErrorService, ERROR_CODE } from 'src/error.service';

@Injectable()
export class AccountService {
  constructor(
    private readonly hashingService: HashingService,
    private readonly prismaService: PrismaService,
    private readonly errorService: ErrorService,
  ) {}

  async create(createAccountInput: CreateAccountInput) {
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
    await this.prismaService.account.create({ data: createAccountInput });

    return { status: STATUS.OK };
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
