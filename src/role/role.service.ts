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
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleInput: UpdateRoleInput) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
