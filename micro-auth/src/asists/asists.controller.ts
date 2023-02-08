import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AsistsService } from './asists.service';
import { CreateAsistDto } from './dto/create-asist.dto';
import { UpdateAsistDto } from './dto/update-asist.dto';

@Controller('asists')
export class AsistsController {
  constructor(private readonly asistsService: AsistsService) {}

  @Post()
  create(@Body() createAsistDto: CreateAsistDto) {
    return this.asistsService.create(createAsistDto);
  }

  @Get()
  findAll() {
    return this.asistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asistsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAsistDto: UpdateAsistDto) {
    return this.asistsService.update(+id, updateAsistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asistsService.remove(+id);
  }
}
