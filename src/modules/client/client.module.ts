import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientResolver } from './client.resolver';

@Module({
  providers: [ClientResolver, ClientService]
})
export class ClientModule {}
