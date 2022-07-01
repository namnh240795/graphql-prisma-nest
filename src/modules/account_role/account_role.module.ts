import { Module } from '@nestjs/common';
import { AccountRoleService } from './account_role.service';
import { AccountRoleResolver } from './account_role.resolver';
import { PrismaService } from 'src/share_modules/prisma.service';
import { ErrorService } from 'src/share_modules/error.service';

@Module({
  providers: [
    AccountRoleResolver,
    AccountRoleService,
    PrismaService,
    ErrorService,
  ],
})
export class AccountRoleModule {}
