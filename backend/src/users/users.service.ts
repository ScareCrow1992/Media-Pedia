// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepo: Repository<User>,
    ) { }

    async create(data: CreateUserDto): Promise<User> {
        const user = this.usersRepo.create(data); // 인스턴스 생성
        return this.usersRepo.save(user);         // DB에 INSERT
    }

    async findAll(): Promise<User[]> {
        return this.usersRepo.find();
    }
}