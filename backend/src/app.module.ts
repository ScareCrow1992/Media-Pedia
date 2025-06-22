import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueryModule } from './query/query.module';
import { DomainModule } from './domain/domain.module';
import { AdminModule } from './admin/admin.module';
import { PipesModule } from './common/pipes/pipes.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';


@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60,
          limit: 100,
        },
      ],
    }),
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
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AdminModule,
    QueryModule,
    DomainModule,
    PipesModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }
  ],
})

// 향후 멀티 인스턴스 서버로 확장해야 할 경우
// ThrottlerStorageRedisModule 같은 외부 스토리지 도입을 고려 해야 함

export class AppModule { }
