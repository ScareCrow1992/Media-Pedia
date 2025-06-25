
export interface BaseMovieDto{
  title: string;

  slug: string;

  description?: string;

  releaseDate?: Date;

  runningTime?: number;

  age_rating?: string;

  country?: string;

  language?: string;

  thumbnail_url?: string;

}

export interface CreateMovieDto  extends Partial<BaseMovieDto> {

}

export interface UpdateMovieDto  extends Partial<BaseMovieDto> {

}

export function toCreateMovieDto(data: Partial<BaseMovieDto>): CreateMovieDto {
  return {
    title : data.title,
    slug : data.slug,
    description : data.description,
    releaseDate : data.releaseDate,
    runningTime : data.runningTime,
    age_rating : data.age_rating,
    country : data.country,
    language : data.language,
    thumbnail_url : data.thumbnail_url
  } as CreateMovieDto;
}



export function toUpdateMovieDto(data: Partial<BaseMovieDto>): UpdateMovieDto {
  return {
    title : data.title,
    slug : data.slug,
    description : data.description,
    releaseDate : data.releaseDate,
    runningTime : data.runningTime,
    age_rating : data.age_rating,
    country : data.country,
    language : data.language,
    thumbnail_url : data.thumbnail_url
  } as UpdateMovieDto;
}


export type CreateUpdateMovieDto  = Partial<BaseMovieDto>;



//====================================


export interface CreateCastDto{
  name: string;
}

