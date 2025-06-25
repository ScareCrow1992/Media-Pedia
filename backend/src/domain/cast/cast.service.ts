import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cast } from '../movies/entities/cast.entity';
import { Repository } from 'typeorm';
import { CastDto } from '../movies/dto/cast.dto';

@Injectable()
export class CastService {
  constructor(
    @InjectRepository(Cast)
    private readonly castRepository: Repository<Cast>
  ) { }

  async getCastsById() {

  }


  async getCast(cast_id: number){
    
    if (typeof cast_id !== 'number' || !Number.isInteger(cast_id)) {
      // 400
      throw new BadRequestException('잘못된 ID입니다.');
    }

    const cast_raw = await this.castRepository.findOne({where: {id: cast_id}});

    return CastDto.fromRaw(cast_raw);
  }


  async getCasts(limit_cnt: number) {

    if (typeof limit_cnt !== 'number' || !Number.isInteger(limit_cnt)) {
      // 400
      throw new BadRequestException('잘못된 ID입니다.');
    }
    
    if(limit_cnt > 20)
      limit_cnt = 20;

    const raw_datas = await this.castRepository.find({
      order: {id: 'ASC'},
      take: limit_cnt
    })

    const result: CastDto[] = raw_datas.map(CastDto.fromRaw);
    return result;
  }
}
