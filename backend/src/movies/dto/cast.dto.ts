import { Cast } from '../entities/cast.entity';

export class CastDto {
    id: number;
    name: string;

    static fromEntity(entity: Cast): CastDto {
        const dto = new CastDto();
        dto.id = entity.id;
        dto.name = entity.name;
        return dto;
    }
}