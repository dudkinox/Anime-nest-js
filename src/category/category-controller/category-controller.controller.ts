import { Get } from '@nestjs/common';
import { Query } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { card } from 'api-anime-bilibilli/dist/bypass/model/BypassModel';
import { CategoryService } from '../category-service/category-service.service';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  getCategory(
    @Query('style') style: string,
    @Query('page') page: string,
    @Query('pagesize') pagesize: string,
    @Query('platform') platform: string,
    @Query('s_locale') s_locale: string,
  ): any {
    return this.categoryService.getCategory(
      style,
      page,
      pagesize,
      platform,
      s_locale,
    );
  }
}
