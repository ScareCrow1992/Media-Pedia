import { Module } from '@nestjs/common';
import { AdminMoviesModule } from 'src/domain/movies/admin/admin-movies.module';
import { AdminCastModule } from 'src/domain/cast/admin/admin-cast.module';
import { AdminDirectorModule } from 'src/domain/director/admin/admin-director.module';

@Module({
  imports: [AdminMoviesModule, AdminCastModule, AdminDirectorModule]
})
export class AdminModule {}
