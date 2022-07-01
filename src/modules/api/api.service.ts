import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorService, ERROR_CODE } from 'src/share_modules/error.service';
import { PrismaService } from 'src/share_modules/prisma.service';
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
    return this.prismaService.api.findMany();
  }

  async findOne(id: number, info: Prisma.ApiSelect) {
    const found = await this.prismaService.api.findUnique({
      where: { id },
      select: info,
    });

    if (!found) {
      this.errorService.throwNotFoundRequest(ERROR_CODE.API_NOT_FOUND);
    }
    return found;
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
