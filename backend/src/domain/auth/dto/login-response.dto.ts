import { IsEmail, IsNotEmpty, isString, MinLength } from "class-validator";


export class LoginResponseDto {
    id: number;

    @IsNotEmpty()
    nickname: string;

    @IsEmail()
    email: string;

}