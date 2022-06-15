import { Test, TestingModule } from '@nestjs/testing';
import { PermissionApiService } from './permission_api.service';

describe('PermissionApiService', () => {
  let service: PermissionApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermissionApiService],
    }).compile();

    service = module.get<PermissionApiService>(PermissionApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
