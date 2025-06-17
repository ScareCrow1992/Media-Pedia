import { Module } from '@nestjs/common';
import { CastController } from './cast.controller';
import { CastService } from './cast.service';
import { Cast } from '../movies/entities/cast.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cast])],
  controllers: [CastController],
  providers: [CastService],
  exports: [CastService]
})
export class CastModule {}
