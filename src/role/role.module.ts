import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';

@Module({
  providers: [RoleResolver, RoleService, PrismaService],
})
export class RoleModule {}
