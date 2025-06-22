import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";


export class UserRegisterDto {
  @ApiProperty({
    type: String,
    description: "닉네임",
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
    description: "계정 비밀번호",
    example: "example@hostname"
  })
  @MinLength(6)
  password: string;
}