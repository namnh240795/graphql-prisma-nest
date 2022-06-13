import { Injectable } from '@nestjs/common';
import { ErrorService, ERROR_CODE } from 'src/error.service';
import { PrismaService } from 'src/prisma.service';
import { CreateApiInput } from './dto/create-api.input';
import { UpdateApiInput } from './dto/update-api.input';

@Injectable()
export class ApiService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly errorService: ErrorService,
  ) {}

  async checkExist(createApiInput: CreateApiInput) {
    const found = await this.prismaService.api.findUnique({
      where: { path: createApiInput.path },
    });
    if (found) {
      this.errorService.throwBadRequest(ERROR_CODE.API_PATH_ALREADY_EXIST);
    }
  }

  async create(createApiInput: CreateApiInput) {
    await this.checkExist(createApiInput);
    return this.prismaService.api.create({ data: createApiInput });
  }

  findAll() {
    return `This action returns all api`;
  }

  findOne(id: number) {
    return this.prismaService.api.findUnique({ where: { id } });
  }

  update(id: number, updateApiInput: UpdateApiInput) {
    return this.prismaService.api.update({
      where: { id },
      data: updateApiInput,
    });
  }

  remove(id: number) {
    return this.prismaService.api.delete({ where: { id } });
  }
}
