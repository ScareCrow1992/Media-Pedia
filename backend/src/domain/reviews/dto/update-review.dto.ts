import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class UpdateReviewDto {
    @IsOptional()
    @IsInt()
    @Min(0)
    @Max(10)
    rating?: number;

    @IsOptional()
    @IsString()
    content?: string;
}