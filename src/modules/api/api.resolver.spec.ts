import { Test, TestingModule } from '@nestjs/testing';
import { ApiResolver } from './api.resolver';
import { ApiService } from './api.service';

describe('ApiResolver', () => {
  let resolver: ApiResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiResolver, ApiService],
    }).compile();

    resolver = module.get<ApiResolver>(ApiResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
