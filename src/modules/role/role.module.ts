import { Module } from '@nestjs/common';
import { PrismaService } from 'src/share_modules/prisma.service';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';
import { ErrorService } from 'src/share_modules/error.service';

@Module({
  providers: [RoleResolver, RoleService, PrismaService, ErrorService],
})
export class RoleModule {}
