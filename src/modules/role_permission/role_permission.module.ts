import { Module } from '@nestjs/common';
import { RolePermissionService } from './role_permission.service';
import { RolePermissionResolver } from './role_permission.resolver';

@Module({
  providers: [RolePermissionResolver, RolePermissionService]
})
export class RolePermissionModule {}
