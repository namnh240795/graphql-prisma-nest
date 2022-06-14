import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiResolver } from './api.resolver';
import { PrismaService } from 'src/prisma.service';
import { ErrorService } from 'src/error.service';

@Module({
  providers: [ApiResolver, ApiService, PrismaService, ErrorService],
})
export class ApiModule {}
