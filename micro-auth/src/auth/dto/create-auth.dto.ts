import { IsArray, IsEmail, IsIn, IsNotEmpty } from 'class-validator';

export class CreateAuthDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsArray()
  @IsIn(['admin', 'estudent', 'teacher'], { each: true })
  roles: string[];
}
