import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { MovieDetailDto } from './dto/movie-detail.dto';
import { CastDto } from './dto/cast.dto';
import { QueryService } from 'src/query/query.service';

@Controller('movies')
export class MoviesController {
    constructor(
        private readonly moviesService: MoviesService
    ) { }

    
    // @Get(':id/casts')
    // async getMovieCasts(@Param('id', ParseIntPipe) id: number): Promise<[CastDto]>{
    //     return this.queryService.getMovieCasts(id);
    // }
    

    @Get(':id')
    async getMovieById(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<MovieDetailDto> {
        return this.moviesService.findById(id);
    }
}
