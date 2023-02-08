import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAsistDto } from './dto/create-asist.dto';
import { UpdateAsistDto } from './dto/update-asist.dto';
import { Asist } from './entities/asist.entity';

@Injectable()
export class AsistsService {
  constructor(
    @InjectRepository(Asist) private asistRepository: Repository<Asist>,
  ) {}
  create(createAsistDto: CreateAsistDto) {
    return this.asistRepository.save(createAsistDto);
  }

  findAll() {
    return this.asistRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} asist`;
  }

  update(id: number, updateAsistDto: UpdateAsistDto) {
    return `This action updates a #${id} asist`;
  }

  remove(id: number) {
    return `This action removes a #${id} asist`;
  }
}
