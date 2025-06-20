// src/users/users.controller.ts
import { Body, Controller, Post, Get, ParseIntPipe, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ProfileDTO } from './dto/get-user-profile.dto';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async createUser(@Body() body: CreateUserDto) {
        return this.usersService.create(body);
    }

    @Get()
    async findAll() {
        return this.usersService.findAll();
    }
}