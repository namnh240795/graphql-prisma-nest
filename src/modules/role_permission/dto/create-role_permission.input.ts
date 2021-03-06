import { IsNotEmpty, IsNumber } from 'class-validator';
export class CreateRolePermissionInput {
  @IsNotEmpty()
  @IsNumber()
  role_id: number;
  @IsNotEmpty()
  @IsNumber()
  permission_id: number;
}
