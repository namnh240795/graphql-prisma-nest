import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ApiService } from './api.service';
import { CreateApiInput } from './dto/create-api.input';
import { UpdateApiInput } from './dto/update-api.input';

@Resolver('Api')
export class ApiResolver {
  constructor(private readonly apiService: ApiService) {}

  @Mutation('createApi')
  create(@Args('createApiInput') createApiInput: CreateApiInput) {
    return this.apiService.create(createApiInput);
  }

  @Query('api')
  findAll() {
    return this.apiService.findAll();
  }

  @Query('apiDetail')
  findOne(@Args('id') id: number) {
    return this.apiService.findOne(id);
  }

  @Mutation('updateApi')
  update(@Args('updateApiInput') updateApiInput: UpdateApiInput) {
    return this.apiService.update(updateApiInput.id, updateApiInput);
  }

  @Mutation('removeApi')
  remove(@Args('id') id: number) {
    return this.apiService.remove(id);
  }
}
