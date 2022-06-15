import { CreateAccountRoleInput } from './create-account_role.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateAccountRoleInput extends PartialType(CreateAccountRoleInput) {
  id: number;
}
