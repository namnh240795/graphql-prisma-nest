import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePermissionInput } from './dto/create-permission.input';
import { UpdatePermissionInput } from './dto/update-permission.input';

@Injectable()
export class PermissionService {
  constructor(private readonly prismaService: PrismaService) {}

  async checkExist(createPermissionInput: CreatePermissionInput) {
    const found = await this.prismaService.permission.findUnique({
      where: { name: createPermissionInput.name },
    });
    if (found) {
      throw new BadRequestException('permission name already exist');
    }
  }

  async create(createPermissionInput: CreatePermissionInput) {
    await this.checkExist(createPermissionInput);

    return this.prismaService.permission.create({
      data: createPermissionInput,
    });
  }

  findAll() {
    return `This action returns all permission`;
  }

  findOne(id: number) {
    return this.prismaService.permission.findUnique({ where: { id } });
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
