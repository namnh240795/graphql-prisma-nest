import { IsNotEmpty, IsNumber } from 'class-validator';

export class ListRoleInput {
  @IsNumber()
  @IsNotEmpty()
  skip: number;
  @IsNumber()
  @IsNotEmpty()
  take: number;
}
