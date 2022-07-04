import { IsNotEmpty, IsNumber } from 'class-validator';

export class ListRolePermissionInput {
  @IsNotEmpty()
  @IsNumber()
  take: number;
  @IsNotEmpty()
  @IsNumber()
  skip: number;
}
