import { IsNotEmpty } from 'class-validator';

export class LoginInput {
  @IsNotEmpty()
  email_or_phone: string;
  @IsNotEmpty()
  password: string;
}
