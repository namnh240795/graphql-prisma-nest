import { Reflector } from '@nestjs/core';
import {
  applyDecorators,
  CanActivate,
  // ExecutionContext,
  UseGuards,
} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
class JwtAuthGuard extends AuthGuard('jwt') {}

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
  return applyDecorators(UseGuards(JwtAuthGuard, JwtPermissionsGuard));
}
