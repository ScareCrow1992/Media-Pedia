import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDirectorDto } from 'src/domain/director/admin/dto/create-director.dto';
import { Director } from 'src/domain/movies/entities/director.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminDirectorService {
    constructor(
        @InjectRepository(Director)
        private readonly directorRepo: Repository<Director>,
    ){}

    async createDirector(dto: CreateDirectorDto): Promise<Director>{
        const director = this.directorRepo.create(dto);
        return await this.directorRepo.save(director);
    }
}
