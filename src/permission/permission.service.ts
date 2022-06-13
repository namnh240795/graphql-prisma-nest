import { Injectable } from '@nestjs/common';
import { CreatePermissionInput } from './dto/create-permission.input';
import { UpdatePermissionInput } from './dto/update-permission.input';

@Injectable()
export class PermissionService {
  create(createPermissionInput: CreatePermissionInput) {
    return 'This action adds a new permission';
  }

  findAll() {
    return `This action returns all permission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permission`;
  }

  update(id: number, updatePermissionInput: UpdatePermissionInput) {
    return `This action updates a #${id} permission`;
  }

  remove(id: number) {
    return `This action removes a #${id} permission`;
  }
}
