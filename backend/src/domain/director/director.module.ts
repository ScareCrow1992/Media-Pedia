import { Module } from '@nestjs/common';
import { DirectorController } from './director.controller';
import { DirectorService } from './director.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Director } from '../movies/entities/director.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Director])],
  controllers: [DirectorController],
  providers: [DirectorService],
  exports: [DirectorService]
})
export class DirectorModule {}
