import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class JwtPermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  matchRoles(permissions: string[] | string, userType: string) {
    if (typeof permissions === 'string') {
      return permissions === userType;
    }
    return permissions.includes(userType);
  }

  canActivate(context: ExecutionContext): boolean {
    const permissions = this.reflector.get<string[]>(
      'permissions',
      context.getHandler(),
    );

    if (!permissions) {
      return true;
    }

    const request: any = context.switchToHttp().getRequest();

    return this.matchRoles(permissions, request.user.type);
  }
}
