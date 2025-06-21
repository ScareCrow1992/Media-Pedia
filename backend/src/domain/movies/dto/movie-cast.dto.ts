import {ApiProperty} from "@nestjs/swagger"

export class MovieCastDto {
    @ApiProperty({ example: "매튜 맥커너히", description: "배우 이름"})
    name: string;

    @ApiProperty({ example: "쿠퍼", description: "배역"})
    role: string;
}