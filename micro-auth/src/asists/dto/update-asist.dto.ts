import { PartialType } from '@nestjs/mapped-types';
import { CreateAsistDto } from './create-asist.dto';

export class UpdateAsistDto extends PartialType(CreateAsistDto) {}
