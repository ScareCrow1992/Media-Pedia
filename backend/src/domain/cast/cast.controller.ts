import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CastService } from './cast.service';

@Controller('cast')
export class CastController {


  constructor(private readonly castService: CastService) { }


  @Get('limit/:limit_cnt')
  async getCasts(
    @Param('limit_cnt', ParseIntPipe) limit_cnt: number
  ) {
    return await this.castService.getCasts(limit_cnt);
  }


  @Get(':cast_id')
  async getCast(
    @Param('cast_id', ParseIntPipe) cast_id: number
  ) {
    return await this.castService.getCast(cast_id);
  }
}