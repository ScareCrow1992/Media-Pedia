import { Module } from '@nestjs/common';
import { AdminAuthController } from './admin-auth.controller';
import { AdminAuthService } from './admin-auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/domain/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AdminAuthController],
  providers: [AdminAuthService]
})
export class AdminAuthModule {}
