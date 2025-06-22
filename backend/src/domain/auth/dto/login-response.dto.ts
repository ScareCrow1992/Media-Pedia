import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, isString, MinLength } from "class-validator";


export class LoginResponseDto {
  @ApiProperty({
    type: Number,
    description: "유저 식별용 ID",
    example: "123"
  })
  id: number;

  @ApiProperty({
    type: String,
    description: "유저 닉네임",
    example: "MovieMan"
  })
  @IsNotEmpty()
  nickname: string;

  @ApiProperty({
    type: String,
    description: "계정과 연동된 메일주소",
    example: "example@hostname"
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    description: "인증용 Access Token",
    example: "example@hostname"
  })
  access_token: string;

  @ApiProperty({
    type: String,
    description: "토큰 만료일"
  })
  expires_in?: number;

  @ApiProperty({
    type: String,
    description: "Token Type"
  })
  token_type?: 'Bearer';
}