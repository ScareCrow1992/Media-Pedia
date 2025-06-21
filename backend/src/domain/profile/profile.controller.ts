import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ProfileDTO } from '../users/dto/get-user-profile.dto';
import { ProfileService } from './profile.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('profile')
export class ProfileController {

  constructor(private readonly profileService: ProfileService) { }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  async findUserProfile(
    @Param('id', ParseIntPipe) user_id: number
  ): Promise<ProfileDTO> {
    return this.profileService.findUserProfile(user_id);
  }
}
