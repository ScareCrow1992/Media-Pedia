import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRegisterDto } from './dto/user-register.dto';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login-response.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){ }


    @Post('login')
    async login(@Body() loginDto: LoginDto) : Promise<LoginResponseDto>{
        return this.authService.login(loginDto);
    }


    @Post('register')
    async register(@Body() dto: UserRegisterDto){
        const ret = await this.authService.register(dto);
        return { message: '회원가입 성공', ret };
    }

}
