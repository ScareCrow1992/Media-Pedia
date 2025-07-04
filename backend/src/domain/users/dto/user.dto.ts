import { IsEmail, IsString, MinLength, IsOptional, IsNumber } from 'class-validator';
import { ReviewReport } from 'src/domain/reviews/entities/review-report.entity';
import { OneToMany } from 'typeorm';

export class UserDto {
  @IsNumber()
  id: number;

  @IsEmail()
  email: string;

  @IsString()
  nickname: string;

  @IsOptional()
  @IsString()
  profileImageUrl?: string;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsString()
  provider?: string;

  @IsOptional()
  @IsString()
  socialId?: string;

  @OneToMany(() => ReviewReport, (report) => report.review)
  reviewReports: ReviewReport[];

  static fromRaw(raw: any): UserDto {
    return {
      id: raw.id,
      email: raw.email,
      nickname: raw.nickname,
      profileImageUrl: raw.profile_image_url,
      reviewReports: raw.reviewReports
    }
  }
}