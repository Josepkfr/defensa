import { Module } from '@nestjs/common';
import { AsistsService } from './asists.service';
import { AsistsController } from './asists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asist } from './entities/asist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asist])],
  controllers: [AsistsController],
  providers: [AsistsService],
})
export class AsistsModule {}
