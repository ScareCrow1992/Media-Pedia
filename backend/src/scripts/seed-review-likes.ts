// scripts/seed-users.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
// import { UsersService } from '../src/users/users.service';
// import { User } from '../src/users/entities/user.entity';
import { faker } from '@faker-js/faker';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../../src/domain/users/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Review } from 'src/domain/reviews/entities/review.entity';
import { ReviewsService } from 'src/domain/reviews/reviews.service';



function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}



async function bootstrap() {
  console.log("start!");
  const app = await NestFactory.createApplicationContext(AppModule);

  
  const reviewsService = app.get(ReviewsService);
  const usersRepo = app.get<Repository<User>>(getRepositoryToken(User));
  const reviewsRepo = app.get<Repository<Review>>(getRepositoryToken(Review));

  const users = await usersRepo.find();
  const reviews = await reviewsRepo.find();

  const likeSet = new Set<string>();
  let likeCount = 0;
  // 리뷰 : 500개, 유저 : 50명 = 25000
  while (likeCount < 5000) {
    const user = getRandomElement(users);
    const review = getRandomElement(reviews);

    const key = `${user.id}-${review.id}`;
    if (likeSet.has(key)) continue;

    // console.log(key);

    try {
      await reviewsService.toggleLike(user.id, review.id);
      likeSet.add(key);
      likeCount++;
    } catch (err) {
      console.warn(`좋아요 실패: user=${user.id}, review=${review.id}`);
    }

  }

  console.log('좋아요 5000개 생성 완료');


  await app.close();
}

bootstrap();
