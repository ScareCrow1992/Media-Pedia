// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   ManyToOne,
//   CreateDateColumn,
//   UpdateDateColumn,
//   DeleteDateColumn,
//   JoinColumn,
// } from 'typeorm';
// import { User } from 'src/domain/users/entities/user.entity';
// import { Review } from './review.entity';

// @Entity('review_comments')
// export class Comment {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @ManyToOne(() => Review, review => review.id, { onDelete: 'CASCADE' })
//   @JoinColumn({ name: 'review_id' })
//   review: Review;

//   @ManyToOne(() => User, user => user.id, { onDelete: 'CASCADE' })
//   @JoinColumn({ name: 'user_id' })
//   user: User;

//   @Column({ type: 'text' })
//   content: string;

//   @Column({ name: 'likes_count', type: 'int', default: 0 })
//   likesCount: number;

//   @Column({ name: 'reports_count', type: 'int', default: 0 })
//   reportsCount: number;

//   @CreateDateColumn({ name: 'created_at' })
//   createdAt: Date;

//   @UpdateDateColumn({ name: 'updated_at' })
//   updatedAt: Date;

//   @DeleteDateColumn({ name: 'deleted_at' })
//   deletedAt?: Date;
// }
