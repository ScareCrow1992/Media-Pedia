import { IsInt, IsString } from "class-validator";


export class CreateMovie2CastDto{
    @IsInt()
    cast_id: number;

    @IsInt()
    movie_id: number;
}