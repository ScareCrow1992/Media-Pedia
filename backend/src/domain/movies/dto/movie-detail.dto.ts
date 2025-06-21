import { ApiProperty } from "@nestjs/swagger";
import { Movie } from "../entities/movie.entity";

import { MovieCastDto } from './movie-cast.dto';
import { MovieDirectorDto } from './movie-director.dto';


// import { MovieKeyword } from "../entities/movie-keyword.entity";
// import { MovieDirector } from "../entities/movie-director.entity";
// import { MovieCast } from "../entities/movie-cast.entity";
// import { MovieGenre } from "../entities/movie-genre.entity";

export class MovieDetailDto {

  @ApiProperty({nullable: true})
  id: number;
  
  @ApiProperty()
  title: string;
  
  @ApiProperty()
  slug: string;
  
  @ApiProperty()
  description: string;
  
  @ApiProperty()
  releaseDate: Date;
  
  
  @ApiProperty()
  runningTime: number;
  
  
  @ApiProperty()
  ageRating: string;
  
  
  @ApiProperty()
  country: string;
  
  
  @ApiProperty()
  language: string;
  
  
  @ApiProperty()
  thumbnailUrl: string;

  
  @ApiProperty()
  genres: string[];
  
  
  @ApiProperty()
  casts: MovieCastDto[];
  
  
  @ApiProperty()
  directors: MovieDirectorDto[];
  
  
  @ApiProperty()
  keywords: string[];

  static fromEntity(movie: Movie): MovieDetailDto {
    const dto = new MovieDetailDto();

    dto.id = movie.id;
    dto.title = movie.title;
    dto.slug = movie.slug;
    dto.description = movie.description;
    dto.releaseDate = movie.releaseDate;
    dto.runningTime = movie.runningTime;
    dto.ageRating = movie.ageRating;
    dto.country = movie.country;
    dto.language = movie.language;
    dto.thumbnailUrl = movie.thumbnailUrl;

    dto.genres = movie.genres?.map(g => g.genre) || [];
    // dto.directors = movie.directors?.map(d => d.directorName) || [];
    dto.keywords = movie.keywords?.map(k => k.keyword) || [];
    /*
    dto.casts = movie.casts?.map(c => ({
      name: c.castName
    })) || [];
    */
    return dto;
  }
}