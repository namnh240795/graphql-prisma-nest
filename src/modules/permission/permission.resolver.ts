import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PermissionService } from './permission.service';
import { CreatePermissionInput } from './dto/create-permission.input';
import { UpdatePermissionInput } from './dto/update-permission.input';
import { Auth } from 'src/decorators/Authorization';

@Auth()
@Resolver('Permission')
export class PermissionResolver {
  constructor(private readonly permissionService: PermissionService) {}

  @Mutation('createPermission')
  create(
    @Args('createPermissionInput') createPermissionInput: CreatePermissionInput,
  ) {
    return this.permissionService.create(createPermissionInput);
  }

  @Query('permission')
  findAll() {
    return this.permissionService.findAll();
  }

  @Query('permission')
  findOne(@Args('id') id: number) {
    return this.permissionService.findOne(id);
  }

  @Mutation('updatePermission')
  update(
    @Args('updatePermissionInput') updatePermissionInput: UpdatePermissionInput,
  ) {
    return this.permissionService.update(
      updatePermissionInput.id,
      updatePermissionInput,
    );
  }

  @Mutation('removePermission')
  remove(@Args('id') id: number) {
    return this.permissionService.remove(id);
  }
}
