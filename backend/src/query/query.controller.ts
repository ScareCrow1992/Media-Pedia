import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { QueryService } from './query.service';
import { CastDto } from 'src/domain/movies/dto/cast.dto';

@Controller('query')
export class QueryController {
    constructor(
        private readonly queryService: QueryService
    ) { }


    @Get("movie/:id/casts")
    async getCastsJoinMovie(
        @Param('id', ParseIntPipe) id: number
    ) /*: Promise<CastDto[]> */ {
        return this.queryService.getMovieCasts(id);
    }
    
}
