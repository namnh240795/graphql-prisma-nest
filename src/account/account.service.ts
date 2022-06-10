import { STATUS } from './../common/status';
import { Injectable } from '@nestjs/common';
import { HashingService } from 'src/hashing.service';
import { PrismaService } from 'src/prisma.service';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';

@Injectable()
export class AccountService {
  constructor(
    private hashingService: HashingService,
    private prismaService: PrismaService,
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
    });

    if (checkExist.length > 0) {
      throw new Error('Email or phone number already exist');
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
    return `This action removes a #${id} account`;
  }
}
