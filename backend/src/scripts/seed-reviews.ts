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
import { Movie } from 'src/domain/movies/entities/movie.entity';
import { CreateReviewDto } from 'src/domain/reviews/dto/create-review.dto';

import * as fs from 'fs';
import * as path from 'path';

interface FakeReview {
  content: string;
  rating: number;
}


function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}



async function bootstrap() {
  console.log("start!");
  const app = await NestFactory.createApplicationContext(AppModule);


  const reviewsService = app.get(ReviewsService);
  const usersRepo = app.get<Repository<User>>(getRepositoryToken(User));
  const moviesRepo = app.get<Repository<Movie>>(getRepositoryToken(Movie));

  const users = await usersRepo.find();
  const movies = await moviesRepo.find();

  // const reviews = await reviewsRepo.find();

  const filePath = path.resolve(__dirname, './fake-review.json');

  // 2. 파일 읽기 및 파싱
  const rawData = fs.readFileSync(filePath, 'utf-8');
  const parsed = JSON.parse(rawData) as { data: FakeReview[] };
  // console.log(parsed);

  const fake_reviews = parsed.data;

  // const likeSet = new Set<string>();
  let likeCount = 0;

  while (likeCount < 500) {
    const user = getRandomElement(users);
    const movie = getRandomElement(movies);
    const review = getRandomElement(fake_reviews);
    // console.log(review);

    const dto: CreateReviewDto = {
      rating: review.rating,
      content: review.content,
      movie_id: movie.id,
      user_id: user.id
    };

    await reviewsService.createReview(dto);

    // console.log(dto);
    likeCount++;
    // const review = getRandomElement(reviews);

    // const key = `${user.id}-${review.id}`;
    // if (likeSet.has(key)) continue;

    // console.log(key);

    // try {
    //   await reviewsService.toggleLike(user.id, review.id);
    //   // likeSet.add(key);
    //   likeCount++;
    // } catch (err) {
    //   console.warn(`❌ 좋아요 실패: user=${user.id}, review=${review.id}`);
    // }

  }


  console.log('리뷰 500개 생성 완료');


  await app.close();
}

bootstrap();
