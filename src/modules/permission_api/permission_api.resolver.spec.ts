import { Test, TestingModule } from '@nestjs/testing';
import { PermissionApiResolver } from './permission_api.resolver';
import { PermissionApiService } from './permission_api.service';

describe('PermissionApiResolver', () => {
  let resolver: PermissionApiResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermissionApiResolver, PermissionApiService],
    }).compile();

    resolver = module.get<PermissionApiResolver>(PermissionApiResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
