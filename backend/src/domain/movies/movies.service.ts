import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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



  async getLatestMovies(page: number, size: number): Promise<{
    movies: MovieDetailDto[];
    hasMore: boolean;
  }> {
    if (!Number.isInteger(page) || page < 1) {
      throw new BadRequestException('유효하지 않은 페이지입니다.');
    }

    if (!Number.isInteger(size) || size < 1 || size > 50) {
      throw new BadRequestException('유효하지 않은 size입니다.');
    }

    const skip = (page - 1) * size;

    const [rawDatas, total] = await this.movieRepository.findAndCount({
      order: { releaseDate: 'DESC' },
      take: size,
      skip: skip,
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const movies: MovieDetailDto[] = rawDatas.map(MovieDetailDto.fromEntity);
    const hasMore = page * size < total;

    return {
      movies,
      hasMore,
    };
  }

  /*
  async getLatestMovies(limit_cnt: number): Promise<MovieDetailDto[]> {

    if (typeof limit_cnt !== 'number' || !Number.isInteger(limit_cnt)) {
      throw new BadRequestException('잘못된 ID입니다.');
    }

    if (limit_cnt > 50)
      limit_cnt = 50;

    const raw_datas = await this.movieRepository.find({
      order: { releaseDate: 'DESC' },
      take: limit_cnt
    });

    // console.log(movie_datas);
    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });

    const result: MovieDetailDto[] = raw_datas.map(MovieDetailDto.fromEntity);
    return result;
  }
*/

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