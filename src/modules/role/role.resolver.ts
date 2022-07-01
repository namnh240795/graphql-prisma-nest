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

  @Mutation('create_role')
  create(@Args('create_role_input') create_role_input: CreateRoleInput) {
    return this.roleService.create(create_role_input);
  }

  @Query('roles')
  findAll(
    @Args('roles_input') listRoleInput: ListRoleInput,
    @GqlPrismaField() fields,
  ) {
    return this.roleService.findAll(listRoleInput, fields);
  }

  @Query('role')
  findOne(@Args('id') id: number, @GqlPrismaField() info: Prisma.roleSelect) {
    return this.roleService.findOne(id, info);
  }

  @Mutation('update_role')
  update(@Args('update_role_input') updateRoleInput: UpdateRoleInput) {
    return this.roleService.update(updateRoleInput.id, updateRoleInput);
  }

  @Mutation('remove_role')
  remove(@Args('id') id: number) {
    return this.roleService.remove(id);
  }
}
