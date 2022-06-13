import { PrismaService } from 'src/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';

@Injectable()
export class RoleService {
  constructor(private readonly prismaService: PrismaService) {}

  async checkExist(createRoleInput: CreateRoleInput) {
    const found = await this.prismaService.role.findUnique({
      where: { name: createRoleInput.name },
    });
    if (found) {
      throw new BadRequestException('role name already exist');
    }
  }

  async create(createRoleInput: CreateRoleInput) {
    await this.checkExist(createRoleInput);
    return this.prismaService.role.create({ data: createRoleInput });
  }

  findAll() {
    return `This action returns all role`;
  }

  findOne(id: number) {
    return this.prismaService.role.findUnique({ where: { id } });
  }

  update(id: number, updateRoleInput: UpdateRoleInput) {
    return this.prismaService.role.update({
      where: { id },
      data: updateRoleInput,
    });
  }

  remove(id: number) {
    return this.prismaService.role.delete({ where: { id } });
  }
}
