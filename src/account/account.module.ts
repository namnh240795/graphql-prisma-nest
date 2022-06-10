import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountResolver } from './account.resolver';
import { HashingService } from 'src/hashing.service';

@Module({
  providers: [AccountResolver, AccountService, HashingService],
})
export class AccountModule {}
