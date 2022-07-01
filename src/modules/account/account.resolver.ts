import { Prisma } from '@prisma/client';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GqlPrismaField } from 'src/decorators/GqlPrismaField';
import { AccountService } from './account.service';
import { CreateAccountInput } from './dto/create-account.input';
import { ChangePasswordInput } from './dto/change-password-account.input';
import { Request } from '@nestjs/common';
import { Auth, CurrentUser } from 'src/decorators/Authorization';

@Resolver('Account')
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Mutation('create_account')
  create(
    @Args('create_account_input') createAccountInput: CreateAccountInput,
    @GqlPrismaField() fields: Prisma.accountSelect,
  ) {
    return this.accountService.create(createAccountInput, fields);
  }

  @Query('account')
  findAll() {
    return this.accountService.findAll();
  }

  @Query('account_detail')
  findOne(
    @Args('id') id: number,
    @GqlPrismaField() fields: Prisma.accountSelect,
  ) {
    return this.accountService.findOne(+id, fields);
  }

  @Auth()
  @Mutation('change_password')
  update(
    @Args('change_password_input') change_password_input: ChangePasswordInput,
    @CurrentUser() user,
    @GqlPrismaField() fields: Prisma.accountSelect,
  ) {
    return this.accountService.changePassword(
      +user.id,
      change_password_input,
      fields,
    );
  }

  @Mutation('remove_account')
  remove(@Args('id') id: number) {
    return this.accountService.remove(id);
  }
}
