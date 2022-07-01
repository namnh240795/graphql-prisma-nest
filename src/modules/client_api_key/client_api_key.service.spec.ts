import { Test, TestingModule } from '@nestjs/testing';
import { ClientApiKeyService } from './client_api_key.service';

describe('ClientApiKeyService', () => {
  let service: ClientApiKeyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientApiKeyService],
    }).compile();

    service = module.get<ClientApiKeyService>(ClientApiKeyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
