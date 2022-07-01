import { Reflector } from '@nestjs/core';
import {
  applyDecorators,
  CanActivate,
  createParamDecorator,
  ExecutionContext,
  UseGuards,
} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class GraphqlAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  },
);

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
  return applyDecorators(UseGuards(GraphqlAuthGuard, JwtPermissionsGuard));
}
