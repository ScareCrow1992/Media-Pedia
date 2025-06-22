import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ProfileDTO } from '../users/dto/get-user-profile.dto';
import { ProfileService } from './profile.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiHeader, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ParseUserPipe } from 'src/common/pipes/parse-user.pipe';

@Controller('profile')
export class ProfileController {

  constructor(private readonly profileService: ProfileService) { }


  @Get(":id")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')  // swagger.config에서 정의한 name과 일치해야한다.
  @ApiOperation({ summary: '유저 프로필 조회' })
  @ApiResponse({ status: 200, description: '성공적으로 유저 정보를 반환했습니다.' })
  @ApiResponse({ status: 400, description: '파라미터가 올바르지 않습니다.' })
  @ApiResponse({ status: 401, description: 'Unauthorized: 인증 토큰이 없거나 유효하지 않습니다.' })
  @ApiResponse({ status: 404, description: '해당 id의 유저가 없습니다.' })
  @ApiResponse({ status: 500, description: '서버 내부 오류' })
  async findUserProfile(
    @Param('id', ParseIntPipe) user_id: number
  ): Promise<ProfileDTO> {
    return this.profileService.findUserProfile(user_id);
  }
}
