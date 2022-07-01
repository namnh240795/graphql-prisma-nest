import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionResolver } from './permission.resolver';
import { PrismaService } from 'src/share_modules/prisma.service';
import { ErrorService } from 'src/share_modules/error.service';

@Module({
  providers: [
    PermissionResolver,
    PermissionService,
    PrismaService,
    ErrorService,
  ],
})
export class PermissionModule {}
