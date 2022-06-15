import { Module } from '@nestjs/common';
import { PermissionApiService } from './permission_api.service';
import { PermissionApiResolver } from './permission_api.resolver';

@Module({
  providers: [PermissionApiResolver, PermissionApiService]
})
export class PermissionApiModule {}
