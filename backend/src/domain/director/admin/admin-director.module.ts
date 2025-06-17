import { Module } from '@nestjs/common';
import { AdminDirectorController } from './admin-director.controller';
import { AdminDirectorService } from './admin-director.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Director } from 'src/domain/movies/entities/director.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Director])],
    controllers: [AdminDirectorController],
    providers: [AdminDirectorService],
})
export class AdminDirectorModule { }
