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

async function bootstrap() {
  console.log("start!");
  const app = await NestFactory.createApplicationContext(AppModule);

  const userRepo = app.get<Repository<User>>(getRepositoryToken(User));

  const hashedPassword = await bcrypt.hash("password1234", 10);

  const users = Array.from({ length: 50 }).map(() =>{

    const email = faker.internet.email({ provider: "moviepedia.com" })
    const username = email.split("@")[0];

    return userRepo.create({
      email: email,
      password: hashedPassword,
      nickname: username
    })
  }
    
  );

  await userRepo.save(users);
  console.log('유저 50명 생성 완료');


  await app.close();
}

bootstrap();
