// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { ProfileDTO } from './dto/get-user-profile.dto';

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

  async findAll(): Promise<UserDto[]> {
    const rawUsers = this.usersRepo
      .createQueryBuilder('users')
      .getMany();

    const result: UserDto[] = (await rawUsers).map(UserDto.fromRaw);
    return result;
    // return this.usersRepo.find();
  }

}