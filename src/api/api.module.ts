import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiResolver } from './api.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ApiResolver, ApiService, PrismaService],
})
export class ApiModule {}
