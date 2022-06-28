import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Auth } from 'src/decorators/Authorization';
import { AccountRoleService } from './account_role.service';
import { CreateAccountRoleInput } from './dto/create-account_role.input';
import { UpdateAccountRoleInput } from './dto/update-account_role.input';

@Auth()
@Resolver('AccountRole')
export class AccountRoleResolver {
  constructor(private readonly accountRoleService: AccountRoleService) {}

  @Mutation('createAccountRole')
  create(
    @Args('createAccountRoleInput')
    createAccountRoleInput: CreateAccountRoleInput,
  ) {
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

  @Mutation('removeAccountRole')
  remove(@Args('id') id: number) {
    return this.accountRoleService.remove(id);
  }
}
