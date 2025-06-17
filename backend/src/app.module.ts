import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { CastModule } from './cast/cast.module';
import { DirectorModule } from './director/director.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'watcha_admin',
      password: 'watcha_pw123',
      database: 'watcha_clone_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // 개발 중엔 true, 운영에선 false!
    }),
    AuthModule,
    UsersModule,
    MoviesModule,
    ReviewsModule,
    ReportsModule,
    AdminModule,
    CastModule,
    DirectorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
