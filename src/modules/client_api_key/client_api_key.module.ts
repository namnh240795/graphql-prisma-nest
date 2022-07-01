import { Module } from '@nestjs/common';
import { ClientApiKeyService } from './client_api_key.service';
import { ClientApiKeyResolver } from './client_api_key.resolver';

@Module({
  providers: [ClientApiKeyResolver, ClientApiKeyService]
})
export class ClientApiKeyModule {}
