import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('directors')
export class Director {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;
}