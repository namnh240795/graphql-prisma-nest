import { CreateClientApiKeyInput } from './create-client_api_key.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateClientApiKeyInput extends PartialType(CreateClientApiKeyInput) {
  id: number;
}
