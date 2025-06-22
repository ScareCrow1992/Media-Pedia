import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { MovieDetailDto } from './dto/movie-detail.dto';
import { CastDto } from './dto/cast.dto';
import { QueryService } from 'src/query/query.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('movies')
export class MoviesController {
    constructor(
        private readonly moviesService: MoviesService
    ) { }

    
    // @Get(':id/casts')
    // async getMovieCasts(@Param('id', ParseIntPipe) id: number): Promise<[CastDto]>{
    //     return this.queryService.getMovieCasts(id);
    // }
    

    @ApiTags('영화')
    @ApiOperation({ summary: '영화 상세 정보' })
    @ApiResponse({status: 200, description: '영화 상세정보', type: MovieDetailDto})
    @Get(':id')
    async getMovieById(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<MovieDetailDto> {
        return this.moviesService.findById(id);
    }
}
