import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserRegisterDto } from './dto/user-register.dto';
import { DataSource, Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly dataSource: DataSource,
  ) { }


  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }


  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    // email로 유저 찾기
    const user = await this.userRepository.findOne({
      where: { email: loginDto.email },
    });


    // 비밀번호 검증
    if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
      throw new UnauthorizedException('로그인 실패');
    }
    else {
      const payload = { sub: user.id, email: user.email };
      const token = this.jwtService.sign(payload);
      return {
        id: user.id,
        email: user.email,
        nickname: user.nickname,
        access_token: token
      } satisfies LoginResponseDto;
    }
  }


  async register(dto: UserRegisterDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const { email, password, nickname } = dto;

      // 이메일 중복 확인 (WITH LOCK)
      const existingUser = await queryRunner.manager.findOneBy(User, { email });
      if (existingUser) {
        throw new BadRequestException('이미 가입된 이메일입니다.');
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = queryRunner.manager.create(User, {
        email: email.toLowerCase(),
        password: hashedPassword,
        nickname,
      });
      const savedUser = await queryRunner.manager.save(user);

      await queryRunner.commitTransaction();
      const { password: _, ...safeUser } = savedUser;
      return safeUser;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      if (error.code === '23505') {
        // PostgreSQL unique_violation
        throw new BadRequestException('이미 가입된 이메일입니다.');
      }
      throw error;
    } finally {
      await queryRunner.release();
    }
  }



}

