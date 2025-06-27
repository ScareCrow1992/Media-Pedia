import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../../src/domain/users/entities/user.entity';

import * as fs from 'fs';
import * as path from 'path';
import { ReviewCommentService } from 'src/domain/review-comment/review-comment.service';
import { Review } from 'src/domain/reviews/entities/review.entity';
import { CreateReviewCommentDto } from 'src/domain/review-comment/dto/create-review-comment.dto';



function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}



async function bootstrap() {
  console.log("start!");
  const app = await NestFactory.createApplicationContext(AppModule);


  const reviewsService = app.get(ReviewCommentService);
  const usersRepo = app.get<Repository<User>>(getRepositoryToken(User));
  const reviewRepo = app.get<Repository<Review>>(getRepositoryToken(Review));
  // const moviesRepo = app.get<Repository<Movie>>(getRepositoryToken(Movie));

  const users = await usersRepo.find();
  const reviews = await reviewRepo.find();
  // const movies = await moviesRepo.find();

  // const reviews = await reviewsRepo.find();

  const filePath = path.resolve(__dirname, './fake-review-comments.json');

  // 2. 파일 읽기 및 파싱
  const rawData = fs.readFileSync(filePath, 'utf-8');
  const parsed = JSON.parse(rawData);

  const fake_comments = parsed.data;
  // console.log(fake_comments);

  // const likeSet = new Set<string>();
  let commentCount = 0;

  while (commentCount < 1000){

    const user = getRandomElement(users);
    const review = getRandomElement(reviews);
    const comment : string = getRandomElement(fake_comments);

    const dto : CreateReviewCommentDto = {
      content : comment
    };

    await reviewsService.postComment(review.id, user, dto);

    commentCount++;
  }

  /*
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
    likeCount++;
  }
  */

  console.log('코멘트 1000개 생성 완료');


  await app.close();
}

bootstrap();
