import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateAsistDto {
  @Type(() => Date)
  @IsDate()
  init: Date;

  @Type(() => Date)
  @IsDate()
  exit: Date;

  @IsString()
  @IsNotEmpty()
  activities: string;
}
