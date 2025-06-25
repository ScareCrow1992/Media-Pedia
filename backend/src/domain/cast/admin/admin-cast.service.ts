import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cast } from 'src/domain/movies/entities/cast.entity';
import { Repository } from 'typeorm';
import { CreateCastDto } from './dto/create-cast.dto';

@Injectable()
export class AdminCastService {
  constructor(
    @InjectRepository(Cast)
    private readonly castRepo: Repository<Cast>,
  ) { }

  async createCast(dto: CreateCastDto): Promise<Cast> {
    const cast = this.castRepo.create(dto);
    return await this.castRepo.save(cast);
  }


  async updateCast(cast_id: number, dto: CreateCastDto) {
    if (typeof cast_id !== 'number' || !Number.isInteger(cast_id)) {
      throw new BadRequestException('잘못된 ID입니다.');
    }

    await this.castRepo.createQueryBuilder()
      .update(Cast)
      .set({
        name: dto.name
      })
      .where("id=:id", {id:cast_id})
      .execute();
    return "Hello";
  }
}
