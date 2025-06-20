import { ReviewLike } from 'src/domain/reviews/entities/review-like.entity';
import { ReviewReport } from 'src/domain/reviews/entities/review-report.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany,
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

    @OneToMany(() => ReviewLike, (like) => like.review)
    reviewLikes: ReviewLike[];

    @OneToMany(() => ReviewReport, (report) => report.user)
    reviewReports: ReviewReport[];
}