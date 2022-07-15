import { ListPermissionInput } from './dto/list-permission.input';
import { ErrorService } from 'src/share_modules/errors/error.service';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/share_modules/prisma.service';
import { CreatePermissionInput } from './dto/create-permission.input';
import { UpdatePermissionInput } from './dto/update-permission.input';
import { ERROR_CODE } from 'src/share_modules/errors/error.code';

@Injectable()
export class PermissionService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly errorService: ErrorService,
  ) {}

  async checkExist(createPermissionInput: CreatePermissionInput) {
    const found = await this.prismaService.permission.findUnique({
      where: { name: createPermissionInput.name },
    });
    if (found) {
      this.errorService.throwBadRequest(
        ERROR_CODE.PERMISSION_NAME_ALREADY_EXIST,
      );
    }
  }

  async create(createPermissionInput: CreatePermissionInput) {
    await this.checkExist(createPermissionInput);

    return this.prismaService.permission.create({
      data: createPermissionInput,
    });
  }

  async findAll(list_permission_input: ListPermissionInput, fields) {
    const [permissions, total] = await Promise.all([
      this.prismaService.permission.findMany({
        skip: list_permission_input.skip,
        take: list_permission_input.take,
        select: fields.permissions,
      }),
      this.prismaService.permission.count(),
    ]);
    return {
      permissions,
      total,
      skip: list_permission_input.skip,
      take: list_permission_input.take,
    };
  }

  findOne(id: number, fields) {
    return this.prismaService.permission.findUnique({
      where: { id },
      select: fields,
    });
  }

  async update(id: number, updatePermissionInput: UpdatePermissionInput) {
    const checkParams = { name: updatePermissionInput.name };

    await this.checkExist(checkParams);

    return this.prismaService.permission.update({
      where: { id },
      data: updatePermissionInput,
    });
  }

  remove(id: number) {
    return this.prismaService.permission.delete({ where: { id } });
  }
}
