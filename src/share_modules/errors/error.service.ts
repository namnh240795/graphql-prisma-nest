import { ERROR_CODE } from 'src/share_modules/errors/error.code';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
