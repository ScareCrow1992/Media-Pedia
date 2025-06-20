import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cast } from '../movies/entities/cast.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CastService {
    constructor(
        @InjectRepository(Cast)
        private readonly castRepository: Repository<Cast>
    ){ }

    async getCastsById(){
        
    }

}
