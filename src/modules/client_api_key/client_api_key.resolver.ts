import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClientApiKeyService } from './client_api_key.service';
import { CreateClientApiKeyInput } from './dto/create-client_api_key.input';
import { UpdateClientApiKeyInput } from './dto/update-client_api_key.input';

@Resolver('ClientApiKey')
export class ClientApiKeyResolver {
  constructor(private readonly clientApiKeyService: ClientApiKeyService) {}

  @Mutation('createClientApiKey')
  create(@Args('createClientApiKeyInput') createClientApiKeyInput: CreateClientApiKeyInput) {
    return this.clientApiKeyService.create(createClientApiKeyInput);
  }

  @Query('clientApiKey')
  findAll() {
    return this.clientApiKeyService.findAll();
  }

  @Query('clientApiKey')
  findOne(@Args('id') id: number) {
    return this.clientApiKeyService.findOne(id);
  }

  @Mutation('updateClientApiKey')
  update(@Args('updateClientApiKeyInput') updateClientApiKeyInput: UpdateClientApiKeyInput) {
    return this.clientApiKeyService.update(updateClientApiKeyInput.id, updateClientApiKeyInput);
  }

  @Mutation('removeClientApiKey')
  remove(@Args('id') id: number) {
    return this.clientApiKeyService.remove(id);
  }
}
