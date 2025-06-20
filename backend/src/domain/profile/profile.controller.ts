import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProfileDTO } from '../users/dto/get-user-profile.dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {

  constructor(private readonly profileService : ProfileService){ }

    @Get(":id")
    async findUserProfile(
      @Param('id', ParseIntPipe) user_id: number
    ): Promise<ProfileDTO>{
      return this.profileService.findUserProfile(user_id);
    }
}
