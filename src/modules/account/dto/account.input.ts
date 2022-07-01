import { IsNotEmpty, IsNumber } from 'class-validator';

export class AccountInput {
  @IsNotEmpty()
  @IsNumber()
  skip: number;
  @IsNotEmpty()
  @IsNumber()
  take: number;
}
