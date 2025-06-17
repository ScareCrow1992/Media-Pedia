import { IsInt, IsString } from "class-validator";


export class CreateMovie2CastDto{
    @IsString()
    castName: string;

    @IsInt()
    movie_id: number;
}