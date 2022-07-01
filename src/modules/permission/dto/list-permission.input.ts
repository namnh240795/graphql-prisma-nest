import { IsNotEmpty, IsNumber } from 'class-validator';

export class ListPermissionInput {
  @IsNotEmpty()
  @IsNumber()
  skip: number;
  @IsNotEmpty()
  @IsNumber()
  take: number;
}
