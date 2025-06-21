import { Body, Controller, Get, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRegisterDto } from './dto/user-register.dto';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login-response.dto';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) { }


  @Post('login')
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
  async register(@Body() dto: UserRegisterDto) {
    const ret = await this.authService.register(dto);
    return { message: '회원가입 성공', ret };
  }

}
