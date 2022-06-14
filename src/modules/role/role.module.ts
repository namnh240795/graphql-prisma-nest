import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';
import { ErrorService } from 'src/error.service';

@Module({
  providers: [RoleResolver, RoleService, PrismaService, ErrorService],
})
export class RoleModule {}
