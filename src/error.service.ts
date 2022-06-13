import { BadRequestException, Injectable } from '@nestjs/common';

export enum ERROR_CODE {
  AUTHENTICATION_USER_NOT_FOUND = 'AUTHENTICATION_USER_NOT_FOUND',
}

enum ERROR_MESSAGE {
  AUTHENTICATION_USER_NOT_FOUND = 'Wrong username or password',
}

@Injectable()
export class ErrorService {
  throwBadRequest(error: ERROR_CODE) {
    throw new BadRequestException(ERROR_MESSAGE[error]);
  }
}
