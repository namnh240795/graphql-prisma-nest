import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountResolver } from './account.resolver';
import { HashingService } from 'src/share_modules/hashing.service';
import { PrismaService } from 'src/share_modules/prisma.service';
import { ErrorService } from 'src/share_modules/error.service';

@Module({
  providers: [
    AccountResolver,
    AccountService,
    HashingService,
    PrismaService,
    ErrorService,
  ],
})
export class AccountModule {}
