import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { MovieDetailDto } from './dto/movie-detail.dto';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) { }

    @Get(':id')
    async getMovieById(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<MovieDetailDto> {
        return this.moviesService.findById(id);
    }

}
