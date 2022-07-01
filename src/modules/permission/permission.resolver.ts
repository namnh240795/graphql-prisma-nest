import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PermissionService } from './permission.service';
import { CreatePermissionInput } from './dto/create-permission.input';
import { UpdatePermissionInput } from './dto/update-permission.input';
import { GqlPrismaField } from 'src/decorators/GqlPrismaField';
import { ListPermissionInput } from './dto/list-permission.input';

@Resolver('Permission')
export class PermissionResolver {
  constructor(private readonly permissionService: PermissionService) {}

  @Mutation('create_permission')
  create(
    @Args('create_permission_input')
    create_permission_input: CreatePermissionInput,
  ) {
    return this.permissionService.create(create_permission_input);
  }

  @Query('permission')
  findAll(
    @Args('list_permission_input') list_permission_input: ListPermissionInput,
    @GqlPrismaField() fields,
  ) {
    return this.permissionService.findAll(list_permission_input, fields);
  }

  @Query('permission_detail')
  findOne(@Args('id') id: number, @GqlPrismaField() fields) {
    return this.permissionService.findOne(+id, fields);
  }

  @Mutation('update_permission')
  update(
    @Args('update_permission_input')
    update_permission_input: UpdatePermissionInput,
  ) {
    return this.permissionService.update(
      +update_permission_input.id,
      update_permission_input,
    );
  }

  @Mutation('remove_permission')
  remove(@Args('id') id: number) {
    return this.permissionService.remove(+id);
  }
}
