import { Injectable } from '@nestjs/common';
import { ERROR_CODE } from 'src/share_modules/errors/error.code';
import { ErrorService } from 'src/share_modules/errors/error.service';
import { PrismaService } from 'src/share_modules/prisma.service';
import { CreateRolePermissionInput } from './dto/create-role_permission.input';
import { ListRolePermissionInput } from './dto/list-role-permission.input';
import { UpdateRolePermissionInput } from './dto/update-role_permission.input';

@Injectable()
export class RolePermissionService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly errorService: ErrorService,
  ) {}

  async checkExist(createRolePermissionInput: CreateRolePermissionInput) {
    const result = await this.prismaService.role_permission.findFirst({
      where: {
        role_id: { equals: createRolePermissionInput.role_id },
        permission_id: { equals: createRolePermissionInput.permission_id },
      },
    });
    if (result) {
      this.errorService.throwBadRequest(
        ERROR_CODE.ROLE_PERMISSION_PAIR_ALREADY_EXIST,
      );
    }
  }

  async create(createRolePermissionInput: CreateRolePermissionInput) {
    await this.checkExist(createRolePermissionInput);
    // return this.prismaService;
  }

  async findAll(input: ListRolePermissionInput) {
    const [roles_permissions, total] = await Promise.all([
      this.prismaService.role_permission.findMany({
        skip: input.skip,
        take: input.take,
        include: {
          role: true,
          permission: true,
        },
      }),
      this.prismaService.role_permission.count(),
    ]);

    return {
      list: roles_permissions,
      total,
      skip: input.skip,
      take: input.take,
    };
  }

  findOne(id: number, fields) {
    return this.prismaService.role_permission.findUnique({
      where: { id },
      select: fields,
    });
  }

  update(id: number, updateRolePermissionInput: UpdateRolePermissionInput) {
    return `This action updates a #${id} rolePermission`;
  }

  remove(id: number) {
    return this.prismaService.role_permission.delete({ where: { id } });
  }
}
