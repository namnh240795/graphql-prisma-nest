import { Module } from '@nestjs/common';
import { AccountRoleService } from './account_role.service';
import { AccountRoleResolver } from './account_role.resolver';

@Module({
  providers: [AccountRoleResolver, AccountRoleService]
})
export class AccountRoleModule {}
