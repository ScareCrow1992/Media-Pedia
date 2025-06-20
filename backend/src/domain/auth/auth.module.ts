import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PipesModule } from 'src/common/pipes/pipes.module';
import { User } from '../users/entities/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}
