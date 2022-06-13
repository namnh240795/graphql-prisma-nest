import { CreateApiInput } from './create-api.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateApiInput extends PartialType(CreateApiInput) {
  id: number;
}
