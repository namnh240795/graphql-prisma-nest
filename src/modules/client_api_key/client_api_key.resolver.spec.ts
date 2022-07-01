import { Test, TestingModule } from '@nestjs/testing';
import { ClientApiKeyResolver } from './client_api_key.resolver';
import { ClientApiKeyService } from './client_api_key.service';

describe('ClientApiKeyResolver', () => {
  let resolver: ClientApiKeyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientApiKeyResolver, ClientApiKeyService],
    }).compile();

    resolver = module.get<ClientApiKeyResolver>(ClientApiKeyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
