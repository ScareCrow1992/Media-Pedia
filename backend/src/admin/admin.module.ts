import { Module } from '@nestjs/common';
import { AdminMoviesModule } from 'src/domain/movies/admin/admin-movies.module';
import { AdminCastModule } from 'src/domain/cast/admin/admin-cast.module';
import { AdminDirectorModule } from 'src/domain/director/admin/admin-director.module';
import { AdminUsersModule } from 'src/domain/users/admin/admin-users.module';
import { AdminAuthModule } from 'src/domain/auth/admin/admin-auth.module';
import { AdminReportsModule } from 'src/domain/reports/admin/admin-reports.module';

@Module({
  imports: [
    AdminMoviesModule,
    AdminCastModule,
    AdminDirectorModule,
    AdminUsersModule,
    AdminAuthModule,
    AdminReportsModule
  ]
})
export class AdminModule {}
