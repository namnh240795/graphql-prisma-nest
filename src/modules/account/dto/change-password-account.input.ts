import { IsNotEmpty } from 'class-validator';

export class ChangePasswordInput {
  @IsNotEmpty()
  old_password: string;
  @IsNotEmpty()
  new_password: string;
}
