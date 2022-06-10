import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountResolver } from './account.resolver';
import { HashingService } from 'src/hashing.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [AccountResolver, AccountService, HashingService, PrismaService],
})
export class AccountModule {}
