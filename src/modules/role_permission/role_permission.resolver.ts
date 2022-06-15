import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RolePermissionService } from './role_permission.service';
import { CreateRolePermissionInput } from './dto/create-role_permission.input';
import { UpdateRolePermissionInput } from './dto/update-role_permission.input';

@Resolver('RolePermission')
export class RolePermissionResolver {
  constructor(private readonly rolePermissionService: RolePermissionService) {}

  @Mutation('createRolePermission')
  create(@Args('createRolePermissionInput') createRolePermissionInput: CreateRolePermissionInput) {
    return this.rolePermissionService.create(createRolePermissionInput);
  }

  @Query('rolePermission')
  findAll() {
    return this.rolePermissionService.findAll();
  }

  @Query('rolePermission')
  findOne(@Args('id') id: number) {
    return this.rolePermissionService.findOne(id);
  }

  @Mutation('updateRolePermission')
  update(@Args('updateRolePermissionInput') updateRolePermissionInput: UpdateRolePermissionInput) {
    return this.rolePermissionService.update(updateRolePermissionInput.id, updateRolePermissionInput);
  }

  @Mutation('removeRolePermission')
  remove(@Args('id') id: number) {
    return this.rolePermissionService.remove(id);
  }
}
