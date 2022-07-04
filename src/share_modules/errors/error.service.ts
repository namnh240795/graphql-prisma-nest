import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ERROR_CODE } from './error.code';
import { ERROR_MESSAGE } from './error.message';

@Injectable()
export class ErrorService {
  throwBadRequest(error: ERROR_CODE) {
    throw new BadRequestException(ERROR_MESSAGE[error]);
  }

  throwNotFoundRequest(error: ERROR_CODE) {
    throw new NotFoundException(ERROR_MESSAGE[error]);
  }
}
