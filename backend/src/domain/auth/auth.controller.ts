import { Body, Controller, Get, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRegisterDto } from './dto/user-register.dto';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) { }

  
  @Post('login')
  @ApiTags('Auth')
  @ApiBody({ type: LoginDto })
  @ApiOperation({ summary: "로그인" })
  @ApiResponse({ status: 200, description: '로그인성공, JWT 토큰 반환', type: LoginResponseDto })
  @ApiResponse({ status: 401, description: '이메일 또는 비밀번호가 잘못되었습니다.' })
  @ApiResponse({ status: 422, description: '입력값이 유효하지 않습니다.' })
  async login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {

    // const user = await this.authService.validateUser(
    //   loginDto.email, loginDto.password
    // );

    // if (!user) {
    //   throw new UnauthorizedException('Invalid credentials');
    // }

    // loginDto대신 user로 넘기기
    return this.authService.login(loginDto);
  }


  @Post('register')
  @ApiTags('Auth')
  @ApiBody({ type: UserRegisterDto })
  @ApiOperation({ summary: "회원가입" })
  @ApiResponse({ status: 200, description: '로그인성공, JWT 토큰 반환', type: LoginResponseDto })
  @ApiResponse({ status: 400, description: '이미 가입된 메일 주소' })
  @ApiResponse({ status: 500, description: '입력값이 잘못됨' })
  async register(@Body() dto: UserRegisterDto) {
    const ret = await this.authService.register(dto);
    return { message: '회원가입 성공', ret };
  }
}
