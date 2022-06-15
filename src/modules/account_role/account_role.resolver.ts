import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AccountRoleService } from './account_role.service';
import { CreateAccountRoleInput } from './dto/create-account_role.input';
import { UpdateAccountRoleInput } from './dto/update-account_role.input';

@Resolver('AccountRole')
export class AccountRoleResolver {
  constructor(private readonly accountRoleService: AccountRoleService) {}

  @Mutation('createAccountRole')
  create(@Args('createAccountRoleInput') createAccountRoleInput: CreateAccountRoleInput) {
    return this.accountRoleService.create(createAccountRoleInput);
  }

  @Query('accountRole')
  findAll() {
    return this.accountRoleService.findAll();
  }

  @Query('accountRole')
  findOne(@Args('id') id: number) {
    return this.accountRoleService.findOne(id);
  }

  @Mutation('updateAccountRole')
  update(@Args('updateAccountRoleInput') updateAccountRoleInput: UpdateAccountRoleInput) {
    return this.accountRoleService.update(updateAccountRoleInput.id, updateAccountRoleInput);
  }

  @Mutation('removeAccountRole')
  remove(@Args('id') id: number) {
    return this.accountRoleService.remove(id);
  }
}
