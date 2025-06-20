import { IsInt, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {
    @IsInt()
    @Min(0)
    @Max(10)
    rating: number;

    @IsString()
    content: string;

    @IsInt()
    movie_id: number;

    @IsInt()
    user_id: number;

}