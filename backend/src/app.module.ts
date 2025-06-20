import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueryModule } from './query/query.module';
import { DomainModule } from './domain/domain.module';
import { AdminModule } from './admin/admin.module';
import { PipesModule } from './common/pipes/pipes.module';

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
    AdminModule,
    QueryModule,
    DomainModule,
    PipesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
