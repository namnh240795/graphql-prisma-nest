import { Injectable } from '@nestjs/common';
import { ErrorService, ERROR_CODE } from 'src/share_modules/error.service';
import { PrismaService } from 'src/share_modules/prisma.service';
import { CreateAccountRoleInput } from './dto/create-account_role.input';
import { UpdateAccountRoleInput } from './dto/update-account_role.input';

@Injectable()
export class AccountRoleService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly errorService: ErrorService,
  ) {}

  async create(createAccountRoleInput: CreateAccountRoleInput) {
    const found = await this.prismaService.accountRole.findFirst({
      where: createAccountRoleInput,
    });

    if (found) {
      this.errorService.throwBadRequest(
        ERROR_CODE.ACCOUNT_ROLE_ALREADY_HAS_ROLE,
      );
    }

    return this.prismaService.accountRole.create({
      data: createAccountRoleInput,
    });
  }

  findAll() {
    return `This action returns all accountRole`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountRole`;
  }

  remove(id: number) {
    return this.prismaService.accountRole.delete({ where: { id } });
  }
}
