import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionResolver } from './permission.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PermissionResolver, PermissionService, PrismaService],
})
export class PermissionModule {}
