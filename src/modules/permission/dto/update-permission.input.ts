import { CreatePermissionInput } from './create-permission.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePermissionInput extends PartialType(CreatePermissionInput) {
  id: number;
}
