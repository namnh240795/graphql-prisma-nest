import { PrismaService } from 'src/share_modules/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import {
  ErrorService,
  ERROR_CODE,
} from 'src/share_modules/errors/error.service';
import { Prisma } from '@prisma/client';
import { ListRoleInput } from './dto/list-role.input';

@Injectable()
export class RoleService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly errorService: ErrorService,
  ) {}

  async checkExist(createRoleInput: CreateRoleInput) {
    const found = await this.prismaService.role.findUnique({
      where: { name: createRoleInput.name },
    });
    if (found) {
      this.errorService.throwBadRequest(ERROR_CODE.ROLE_NAME_ALREADY_EXIST);
    }
  }

  async create(createRoleInput: CreateRoleInput) {
    await this.checkExist(createRoleInput);
    return this.prismaService.role.create({ data: createRoleInput });
  }

  async findAll(input: ListRoleInput, info) {
    const select = info.data;

    const [roles, total] = await Promise.all([
      this.prismaService.role.findMany({
        skip: input.skip,
        take: input.take,
        select,
      }),
      this.prismaService.role.count(),
    ]);

    return {
      skip: input.skip,
      take: input.take,
      total,
      data: roles,
    };
  }

  async findOne(id: number, info: Prisma.roleSelect) {
    const role = await this.prismaService.role.findUnique({
      where: { id },
      select: info,
    });

    if (!role) {
      this.errorService.throwNotFoundRequest(ERROR_CODE.ROLE_NOT_FOUND);
    }

    return role;
  }

  async update(id: number, updateRoleInput: UpdateRoleInput) {
    const checkParams = { name: updateRoleInput.name };

    await this.checkExist(checkParams);

    return this.prismaService.role.update({
      where: { id },
      data: updateRoleInput,
    });
  }

  remove(id: number) {
    return this.prismaService.role.delete({ where: { id } });
  }
}
