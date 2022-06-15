import { CreateRolePermissionInput } from './create-role_permission.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateRolePermissionInput extends PartialType(
  CreateRolePermissionInput,
) {
  id: number;
}
