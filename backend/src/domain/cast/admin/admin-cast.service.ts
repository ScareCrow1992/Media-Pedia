import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cast } from 'src/domain/movies/entities/cast.entity';
import { Repository } from 'typeorm';
import { CreateCastDto } from './dto/create-cast.dto';

@Injectable()
export class AdminCastService {
    constructor(
        @InjectRepository(Cast)
        private readonly castRepo: Repository<Cast>,
    ){}

    async createCast(dto: CreateCastDto): Promise<Cast>{
        const cast = this.castRepo.create(dto);
        return await this.castRepo.save(cast);
    }

}
