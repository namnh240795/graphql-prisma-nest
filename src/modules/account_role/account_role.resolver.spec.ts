import { Test, TestingModule } from '@nestjs/testing';
import { AccountRoleResolver } from './account_role.resolver';
import { AccountRoleService } from './account_role.service';

describe('AccountRoleResolver', () => {
  let resolver: AccountRoleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountRoleResolver, AccountRoleService],
    }).compile();

    resolver = module.get<AccountRoleResolver>(AccountRoleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
