import { CreateAccountInput } from './create-account.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateAccountInput extends PartialType(CreateAccountInput) {
  id: number;
}
