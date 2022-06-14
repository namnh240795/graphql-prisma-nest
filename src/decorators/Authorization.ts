import { Reflector } from '@nestjs/core';
import {
  applyDecorators,
  CanActivate,
  ExecutionContext,
  // ExecutionContext,
  UseGuards,
} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';

@Injectable()
export class GraphqlAuthGuard extends AuthGuard('jwt') {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    return super.canActivate(new ExecutionContextHost([req]));
  }
}

@Injectable()
class JwtPermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(): boolean {
    // const permissions = this.reflector.get<string[]>(
    //   'permissions',
    //   context.getHandler(),
    // );

    // if (!permissions) {
    //   return true;
    // }

    // const request: any = context.switchToHttp().getRequest();

    // return this.matchRoles(permissions, request.user.type);
    return true;
  }
}

export function Auth() {
  return applyDecorators(UseGuards(GraphqlAuthGuard));
}
