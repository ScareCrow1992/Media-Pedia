import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { MovieDetailDto } from './dto/movie-detail.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) { }

  async findById(id: number): Promise<MovieDetailDto> {
    const movie_entity = await this.movieRepository.findOne({ where: { id } });

    if (!movie_entity) {
      throw new NotFoundException('영화를 찾을 수 없습니다.');
    }

    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });

    const movie_detail_dto: MovieDetailDto = MovieDetailDto.fromEntity(movie_entity);

    return movie_detail_dto;
  }
}