import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('casts')
export class Cast {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;
}