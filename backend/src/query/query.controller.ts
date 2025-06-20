import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { QueryService } from './query.service';

@Controller('query')
export class QueryController {
    constructor(
        private readonly queryService: QueryService
    ) { }


    @Get("movie/:id/casts")
    async getCastsJoinMovie(
        @Param('id', ParseIntPipe) id: number
    ) {
        // console.log("query is ok");
        return this.queryService.getMovieCasts(id);
    }
    
}
