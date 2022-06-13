import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionResolver } from './permission.resolver';

@Module({
  providers: [PermissionResolver, PermissionService]
})
export class PermissionModule {}
