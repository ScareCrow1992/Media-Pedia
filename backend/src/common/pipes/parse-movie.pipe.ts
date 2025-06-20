import {
  BadRequestException,
  Injectable,
  NotFoundException,
  PipeTransform,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from 'src/domain/movies/entities/movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParseMoviePipe implements PipeTransform<string, Promise<Movie>> {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepo: Repository<Movie>,
  ) { }

  async transform(value: string): Promise<Movie> {
    const id = parseInt(value, 10);
    if (isNaN(id)) throw new BadRequestException('movie_id는 숫자여야 합니다.');

    const movie = await this.movieRepo.findOne({ where: { id } });
    if (!movie) throw new NotFoundException('해당 영화가 존재하지 않습니다.');
    return movie;
  }
}