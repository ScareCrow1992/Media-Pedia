import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AdminCastService } from './admin-cast.service';
import { CreateCastDto } from './dto/create-cast.dto';
import { Cast } from 'src/domain/movies/entities/cast.entity';
import { UpdateMovieDto } from 'src/domain/movies/admin/dto/update-movie.dto';

@Controller('admin/cast')
export class AdminCastController {
    constructor(private readonly adminCastsService: AdminCastService){}

    @Post()
    async create(@Body() dto: CreateCastDto): Promise<Cast>{
        return this.adminCastsService.createCast(dto);
    }

    @Get()
    async getTest(){
        return "Hello!";
    }

    @Patch(":cast_id")
    async patchCast(
        @Param("cast_id", ParseIntPipe) cast_id : number,
        @Body() dto: CreateCastDto

    ){
      return this.adminCastsService.updateCast(cast_id, dto);
    }
}