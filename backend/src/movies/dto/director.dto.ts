import { Director } from '../entities/director.entity';

export class DirectorDto {
    id: number;
    name: string;

    static fromEntity(entity: Director): DirectorDto {
        const dto = new DirectorDto();
        dto.id = entity.id;
        dto.name = entity.name;
        return dto;
    }
}