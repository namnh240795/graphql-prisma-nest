import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateApiInput {
  @IsNotEmpty()
  @MaxLength(255)
  path: string;
}
