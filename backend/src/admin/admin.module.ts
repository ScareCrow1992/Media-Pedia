import { Module } from '@nestjs/common';
import { AdminMoviesModule } from 'src/movies/admin/admin-movies.module';

@Module({
  imports: [AdminMoviesModule]
})
export class AdminModule {}
