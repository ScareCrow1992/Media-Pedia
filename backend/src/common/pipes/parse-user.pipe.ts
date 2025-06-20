import {
  BadRequestException,
  Injectable,
  NotFoundException,
  PipeTransform,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/domain/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParseUserPipe implements PipeTransform<string, Promise<User>> {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) { }

  async transform(value: string): Promise<User> {
    const id = parseInt(value, 10);
    if (isNaN(id)) throw new BadRequestException('user_id는 숫자여야 합니다.');

    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('해당 유저가 존재하지 않습니다.');
    return user;
  }
}