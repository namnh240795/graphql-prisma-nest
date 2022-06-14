import { IsEmail, IsNotEmpty, Matches } from 'class-validator';

export class CreateAccountInput {
  @IsEmail()
  email: string;
  @Matches(/^(03[2-9]|05[689]|07[06789]|08[1-9]|09[0-9])([0-9]{7,9})$/)
  phone: string;
  @IsNotEmpty()
  password: string;
}
