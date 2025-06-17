import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminDirectorService } from './admin-director.service';
import { CreateDirectorDto } from 'src/domain/director/admin/dto/create-director.dto';
import { Director } from 'src/domain/movies/entities/director.entity';

@Controller('admin/director')
export class AdminDirectorController {
    constructor(private readonly adminDirectorsService: AdminDirectorService){}


    @Post()
    async create(@Body() dto: CreateDirectorDto): Promise<Director>{
        return this.adminDirectorsService.createDirector(dto);
    }

    @Get()
    async getTest(){
        return "Hello";
    }

}
