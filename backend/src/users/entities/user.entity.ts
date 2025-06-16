import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from 'typeorm';

@Entity('users') // 테이블명 명시
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 255 })
    email: string;

    @Column({ length: 255 })
    password: string;

    @Column({ unique: true, length: 100 })
    nickname: string;

    @Column({ name: 'profile_image_url', length: 500, nullable: true })
    profileImageUrl?: string;

    @Column({ type: 'text', nullable: true })
    bio?: string;

    @Column({ length: 50, default: 'local' })
    provider: string;

    @Column({ name: 'social_id', length: 255, nullable: true })
    socialId?: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt?: Date;
}