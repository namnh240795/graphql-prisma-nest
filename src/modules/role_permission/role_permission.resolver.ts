import { ListRolePermissionInput } from './dto/list-role-permission.input';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RolePermissionService } from './role_permission.service';
import { CreateRolePermissionInput } from './dto/create-role_permission.input';
import { UpdateRolePermissionInput } from './dto/update-role_permission.input';
import { GqlPrismaField } from 'src/decorators/GqlPrismaField';

@Resolver('RolePermission')
export class RolePermissionResolver {
  constructor(private readonly rolePermissionService: RolePermissionService) {}

  @Mutation('create_role_permission')
  create(
    @Args('create_role_permission_input')
    create_role_permission_input: CreateRolePermissionInput,
  ) {
    return this.rolePermissionService.create(create_role_permission_input);
  }

  @Query('list_role_permission')
  findAll(@Args('list_role_permission_input') input: ListRolePermissionInput) {
    return this.rolePermissionService.findAll(input);
  }

  @Query('role_permission')
  findOne(@Args('id') id: number, @GqlPrismaField() fields) {
    return this.rolePermissionService.findOne(id, fields);
  }

  @Mutation('update_role_permission')
  update(
    @Args('update_role_permission_input')
    update_role_permission_input: UpdateRolePermissionInput,
  ) {
    return this.rolePermissionService.update(
      update_role_permission_input.id,
      update_role_permission_input,
    );
  }

  @Mutation('remove_role_permission')
  remove(@Args('id') id: number) {
    return this.rolePermissionService.remove(id);
  }
}
