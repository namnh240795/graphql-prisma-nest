import { Module } from '@nestjs/common';
import { AccountRoleService } from './account_role.service';
import { AccountRoleResolver } from './account_role.resolver';
import { PrismaService } from 'src/prisma.service';
import { ErrorService } from 'src/error.service';

@Module({
  providers: [
    AccountRoleResolver,
    AccountRoleService,
    PrismaService,
    ErrorService,
  ],
})
export class AccountRoleModule {}
