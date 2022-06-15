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
import { AccountRoleModule } from './modules/account_role/account_role.module';
import { RolePermissionModule } from './modules/role_permission/role_permission.module';

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
    AccountRoleModule,
    RolePermissionModule,
  ],
})
export class AppModule {}
