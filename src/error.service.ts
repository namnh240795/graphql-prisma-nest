import { BadRequestException, Injectable } from '@nestjs/common';

export enum ERROR_CODE {
  // AUTHENTICATION
  AUTHENTICATION_USER_NOT_FOUND = 'AUTHENTICATION_USER_NOT_FOUND',
  // ROLE
  ROLE_NAME_ALREADY_EXIST = 'ROLE_NAME_ALREADY_EXIST',
  // API
  API_PATH_ALREADY_EXIST = 'API_PATH_ALREADY_EXIST',
  // PERMISSION
  PERMISSION_NAME_ALREADY_EXIST = 'PERMISSION_NAME_ALREADY_EXIST',
  // ACCOUNT
  ACCOUNT_PHONE_OR_EMAIL_ALREADY_EXIST = 'ACCOUNT_PHONE_OR_EMAIL_ALREADY_EXIST',
  ACCOUNT_NOT_FOUND = 'ACCOUNT_NOT_FOUND',
}

enum ERROR_MESSAGE {
  AUTHENTICATION_USER_NOT_FOUND = 'Wrong username or password',
  ROLE_NAME_ALREADY_EXIST = 'Role name already exist',
  API_PATH_ALREADY_EXIST = 'Api path already exist',
  PERMISSION_NAME_ALREADY_EXIST = 'Permission name already exist',
  ACCOUNT_PHONE_OR_EMAIL_ALREADY_EXIST = 'Email or phone number already exist',
  ACCOUNT_NOT_FOUND = 'Account not found',
}

@Injectable()
export class ErrorService {
  throwBadRequest(error: ERROR_CODE) {
    throw new BadRequestException(ERROR_MESSAGE[error]);
  }
}
