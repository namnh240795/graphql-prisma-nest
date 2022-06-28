import { IsNotEmpty } from 'class-validator';

export class CreateAccountRoleInput {
  @IsNotEmpty()
  account_id: number;
  @IsNotEmpty()
  role_id: number;
}
