import { Genre } from "../entities/genre.entity";

export class GenreDto {
  id: number;
  name: string;

  static fromEntity(entity: Genre): GenreDto {
    const dto = new GenreDto();
    dto.id = entity.id;
    dto.name = entity.name;
    return dto;
  }
}