import { Injectable } from '@nestjs/common';
import { CreateAccountRoleInput } from './dto/create-account_role.input';
import { UpdateAccountRoleInput } from './dto/update-account_role.input';

@Injectable()
export class AccountRoleService {
  create(createAccountRoleInput: CreateAccountRoleInput) {
    return 'This action adds a new accountRole';
  }

  findAll() {
    return `This action returns all accountRole`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountRole`;
  }

  update(id: number, updateAccountRoleInput: UpdateAccountRoleInput) {
    return `This action updates a #${id} accountRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountRole`;
  }
}
