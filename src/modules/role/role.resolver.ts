import { Prisma } from '@prisma/client';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RoleService } from './role.service';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { GqlPrismaField } from 'src/decorators/GqlPrismaField';
import { ListRoleInput } from './dto/list-role.input';

@Resolver('Role')
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Mutation('createRole')
  create(@Args('createRoleInput') createRoleInput: CreateRoleInput) {
    return this.roleService.create(createRoleInput);
  }

  @Query('roles')
  findAll(
    @Args('input') listRoleInput: ListRoleInput,
    @GqlPrismaField() info: any,
  ) {
    return this.roleService.findAll(listRoleInput, info);
  }

  @Query('role')
  findOne(@Args('id') id: number, @GqlPrismaField() info: Prisma.roleSelect) {
    return this.roleService.findOne(id, info);
  }

  @Mutation('updateRole')
  update(@Args('updateRoleInput') updateRoleInput: UpdateRoleInput) {
    return this.roleService.update(updateRoleInput.id, updateRoleInput);
  }

  @Mutation('removeRole')
  remove(@Args('id') id: number) {
    return this.roleService.remove(id);
  }
}
