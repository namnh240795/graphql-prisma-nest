import { Injectable } from '@nestjs/common';
import { CreatePermissionApiInput } from './dto/create-permission_api.input';
import { UpdatePermissionApiInput } from './dto/update-permission_api.input';

@Injectable()
export class PermissionApiService {
  create(createPermissionApiInput: CreatePermissionApiInput) {
    return 'This action adds a new permissionApi';
  }

  findAll() {
    return `This action returns all permissionApi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permissionApi`;
  }

  update(id: number, updatePermissionApiInput: UpdatePermissionApiInput) {
    return `This action updates a #${id} permissionApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} permissionApi`;
  }
}
