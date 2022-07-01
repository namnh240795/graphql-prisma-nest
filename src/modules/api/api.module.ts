import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiResolver } from './api.resolver';
import { PrismaService } from 'src/share_modules/prisma.service';
import { ErrorService } from 'src/share_modules/error.service';

@Module({
  providers: [ApiResolver, ApiService, PrismaService, ErrorService],
})
export class ApiModule {}
