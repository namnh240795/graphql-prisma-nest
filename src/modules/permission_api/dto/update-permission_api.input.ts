import { CreatePermissionApiInput } from './create-permission_api.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePermissionApiInput extends PartialType(CreatePermissionApiInput) {
  id: number;
}
