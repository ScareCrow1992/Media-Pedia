import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateReportDto } from './dto/create-report.dto';
import { UserInfo } from 'src/common/decorators/user.decorator';

@Controller('reports')
export class ReportsController {

  constructor(
    private readonly reportsService: ReportsService
  ) { }




  @Post('/reviews/:review_id')
  @UseGuards(JwtAuthGuard)
  async createReport(
    @UserInfo() user,
    @Param('review_id') reviewId: number,
    @Body() dto: CreateReportDto) {

    this.reportsService.createReport(user, reviewId, dto);
  }


}
