import { Prisma } from '@prisma/client';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GqlPrismaField } from 'src/decorators/GqlPrismaField';
import { AccountService } from './account.service';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';

@Resolver('Account')
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Mutation('createAccount')
  create(
    @Args('createAccountInput') createAccountInput: CreateAccountInput,
    @GqlPrismaField() fields: Prisma.accountSelect,
  ) {
    return this.accountService.create(createAccountInput, fields);
  }

  @Query('account')
  findAll() {
    return this.accountService.findAll();
  }

  @Query('accountDetail')
  findOne(
    @Args('id') id: number,
    @GqlPrismaField() fields: Prisma.accountSelect,
  ) {
    return this.accountService.findOne(+id, fields);
  }

  @Mutation('updateAccount')
  update(@Args('updateAccountInput') updateAccountInput: UpdateAccountInput) {
    return this.accountService.update(
      updateAccountInput.id,
      updateAccountInput,
    );
  }

  @Mutation('removeAccount')
  remove(@Args('id') id: number) {
    return this.accountService.remove(id);
  }
}
