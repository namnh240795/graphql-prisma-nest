import { Module } from '@nestjs/common';
import { RolePermissionService } from './role_permission.service';
import { RolePermissionResolver } from './role_permission.resolver';
import { PrismaService } from 'src/share_modules/prisma.service';
import { ErrorService } from 'src/share_modules/errors/error.service';

@Module({
  providers: [
    RolePermissionResolver,
    RolePermissionService,
    PrismaService,
    ErrorService,
  ],
})
export class RolePermissionModule {}
