import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreatePermissionInput {
  @IsNotEmpty()
  @MaxLength(255)
  name: string;
}
