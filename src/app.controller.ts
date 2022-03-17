import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/bypass')
  getHello(
    @Query('page') page: string,
    @Query('pagesize') pagesize: string,
    @Query('platform') platform: string,
    @Query('s_locale') s_locale: string,
  ): any {
    return this.appService.getBypass(page, pagesize, platform, s_locale);
  }
  @Get('/test')
  getTest(): string {
    return this.appService.getTest();
  }
}
