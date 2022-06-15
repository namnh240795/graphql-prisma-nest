import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

export enum ERROR_CODE {
  // AUTHENTICATION
  AUTHENTICATION_USER_NOT_FOUND = 'AUTHENTICATION_USER_NOT_FOUND',
  // ROLE
  ROLE_NAME_ALREADY_EXIST = 'ROLE_NAME_ALREADY_EXIST',
  ROLE_NOT_FOUND = 'ROLE_NOT_FOUND',
  // API
  API_PATH_ALREADY_EXIST = 'API_PATH_ALREADY_EXIST',
  API_NOT_FOUND = 'API_NOT_FOUND',
  // PERMISSION
  PERMISSION_NAME_ALREADY_EXIST = 'PERMISSION_NAME_ALREADY_EXIST',
  // ACCOUNT
  ACCOUNT_PHONE_OR_EMAIL_ALREADY_EXIST = 'ACCOUNT_PHONE_OR_EMAIL_ALREADY_EXIST',
  ACCOUNT_NOT_FOUND = 'ACCOUNT_NOT_FOUND',
}

enum ERROR_MESSAGE {
  // AUTHENTICATION
  AUTHENTICATION_USER_NOT_FOUND = 'Wrong username or password',
  // ROLE
  ROLE_NAME_ALREADY_EXIST = 'Role name already exist',
  ROLE_NOT_FOUND = 'Role not found',
  // API
  API_PATH_ALREADY_EXIST = 'Api path already exist',
  API_NOT_FOUND = 'Api not found',
  // PERMISSION
  PERMISSION_NAME_ALREADY_EXIST = 'Permission name already exist',
  // ACCOUNT
  ACCOUNT_PHONE_OR_EMAIL_ALREADY_EXIST = 'Email or phone number already exist',
  ACCOUNT_NOT_FOUND = 'Account not found',
}

@Injectable()
export class ErrorService {
  throwBadRequest(error: ERROR_CODE) {
    throw new BadRequestException(ERROR_MESSAGE[error]);
  }

  throwNotFoundRequest(error: ERROR_CODE) {
    throw new NotFoundException(ERROR_MESSAGE[error]);
  }
}
