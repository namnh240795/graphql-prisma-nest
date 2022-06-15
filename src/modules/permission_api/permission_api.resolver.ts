import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PermissionApiService } from './permission_api.service';
import { CreatePermissionApiInput } from './dto/create-permission_api.input';
import { UpdatePermissionApiInput } from './dto/update-permission_api.input';

@Resolver('PermissionApi')
export class PermissionApiResolver {
  constructor(private readonly permissionApiService: PermissionApiService) {}

  @Mutation('createPermissionApi')
  create(@Args('createPermissionApiInput') createPermissionApiInput: CreatePermissionApiInput) {
    return this.permissionApiService.create(createPermissionApiInput);
  }

  @Query('permissionApi')
  findAll() {
    return this.permissionApiService.findAll();
  }

  @Query('permissionApi')
  findOne(@Args('id') id: number) {
    return this.permissionApiService.findOne(id);
  }

  @Mutation('updatePermissionApi')
  update(@Args('updatePermissionApiInput') updatePermissionApiInput: UpdatePermissionApiInput) {
    return this.permissionApiService.update(updatePermissionApiInput.id, updatePermissionApiInput);
  }

  @Mutation('removePermissionApi')
  remove(@Args('id') id: number) {
    return this.permissionApiService.remove(id);
  }
}
