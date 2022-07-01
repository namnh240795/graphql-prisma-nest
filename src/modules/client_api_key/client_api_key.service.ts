import { Injectable } from '@nestjs/common';
import { CreateClientApiKeyInput } from './dto/create-client_api_key.input';
import { UpdateClientApiKeyInput } from './dto/update-client_api_key.input';

@Injectable()
export class ClientApiKeyService {
  create(createClientApiKeyInput: CreateClientApiKeyInput) {
    return 'This action adds a new clientApiKey';
  }

  findAll() {
    return `This action returns all clientApiKey`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clientApiKey`;
  }

  update(id: number, updateClientApiKeyInput: UpdateClientApiKeyInput) {
    return `This action updates a #${id} clientApiKey`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientApiKey`;
  }
}
