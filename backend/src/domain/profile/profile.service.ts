import { Injectable, NotFoundException } from '@nestjs/common';
import { ProfileDTO } from '../users/dto/get-user-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { Review } from '../reviews/entities/review.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
    
    @InjectRepository(Review)
    private readonly reviewRepo: Repository<Review>,
  ) { }
  
    async findUserProfile(id : number): Promise<ProfileDTO> {
  
      const existingUser = await this.usersRepo.findOne({ where: { id } });
  
      if(!existingUser)throw new NotFoundException('해당 유저가 존재하지 않습니다.');
  

      const review_cnt = await this.reviewRepo.count({where: { user_id : id}});
      

      return ProfileDTO.fromRaw(
        existingUser.id,
        existingUser.email,
        existingUser.nickname,
        review_cnt,
      );
    }
  
}
