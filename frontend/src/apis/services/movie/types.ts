export interface MovieCastDTO {
    name: string;
    role: string;
}

export interface MovieDirectorDTO {
    name: string;
}

export interface MovieDetailDTO {
    id: number;
    title: string;
    slug: string;
    description: string;
    releaseDate: Date;
    runningTime: number;
    ageRating: string;
    country: string;
    language: string;
    thumbnailUrl: string;

    genres: string[];
    casts: MovieCastDTO[];
    directors: MovieDirectorDTO[];
    keywords: string[];
}