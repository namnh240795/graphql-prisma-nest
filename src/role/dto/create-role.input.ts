import { IsNotEmpty, MaxLength } from 'class-validator';
export class CreateRoleInput {
  @IsNotEmpty()
  @MaxLength(255)
  name: string;
}
