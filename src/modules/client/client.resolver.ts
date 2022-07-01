import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClientService } from './client.service';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';

@Resolver('Client')
export class ClientResolver {
  constructor(private readonly clientService: ClientService) {}

  @Mutation('createClient')
  create(@Args('createClientInput') createClientInput: CreateClientInput) {
    return this.clientService.create(createClientInput);
  }

  @Query('client')
  findAll() {
    return this.clientService.findAll();
  }

  @Query('client')
  findOne(@Args('id') id: number) {
    return this.clientService.findOne(id);
  }

  @Mutation('updateClient')
  update(@Args('updateClientInput') updateClientInput: UpdateClientInput) {
    return this.clientService.update(updateClientInput.id, updateClientInput);
  }

  @Mutation('removeClient')
  remove(@Args('id') id: number) {
    return this.clientService.remove(id);
  }
}
