import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AccountModule } from './modules/account/account.module';
import { AuthModule } from './modules/auth/auth.module';
import { RoleModule } from './modules/role/role.module';
import { PermissionModule } from './modules/permission/permission.module';
import { ApiModule } from './modules/api/api.module';
import { PermissionApiModule } from './modules/permission_api/permission_api.module';
import { RolePermissionModule } from './modules/role_permission/role_permission.module';
import { ClientModule } from './modules/client/client.module';
import { ClientApiKeyModule } from './modules/client_api_key/client_api_key.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: false,
    }),
    AccountModule,
    AuthModule,
    RoleModule,
    PermissionModule,
    ApiModule,
    PermissionApiModule,
    RolePermissionModule,
    ClientModule,
    ClientApiKeyModule,
  ],
})
export class AppModule {}
