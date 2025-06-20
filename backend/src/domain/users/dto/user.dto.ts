import { IsEmail, IsString, MinLength, IsOptional, IsNumber } from 'class-validator';

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


    static fromRaw(raw: any): UserDto {
        return {
            id: raw.id,
            email: raw.email,
            nickname: raw.nickname,
            profileImageUrl: raw.profile_image_url
        }
    }
}