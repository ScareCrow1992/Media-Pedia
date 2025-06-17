import { Module } from '@nestjs/common';
import { AdminCastService } from './admin-cast.service';
import { AdminCastController } from './admin-cast.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cast } from 'src/domain/movies/entities/cast.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cast])],
  providers: [AdminCastService],
  controllers: [AdminCastController]
})
export class AdminCastModule {}
