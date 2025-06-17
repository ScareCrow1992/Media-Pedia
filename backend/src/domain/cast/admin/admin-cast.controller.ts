import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminCastService } from './admin-cast.service';
import { CreateCastDto } from './dto/create-cast.dto';
import { Cast } from 'src/domain/movies/entities/cast.entity';

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

}
