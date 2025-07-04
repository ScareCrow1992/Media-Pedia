import { Body, Controller, Get, ParseIntPipe, Query, UseGuards } from "@nestjs/common";
import { ReportsService } from "../reports.service";
import { JwtAuthGuard } from "src/domain/auth/guards/jwt-auth.guard";
import { AdminReportsService } from "./admin-reports.service";
import { GetReportsDto } from "./dto/get-reports.dto";



@Controller('admin/reports')
export default class AdminReportController {

  constructor(
    private readonly adminReportsService: AdminReportsService
  ) { }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getReports(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number
  ) /*: Promise<GetReportsDto>*/ {
    return await this.adminReportsService.getReports(page, limit);
  }
}