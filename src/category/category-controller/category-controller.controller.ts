import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { CategoryService } from '../category-service/category-service.service';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  getCategory(): any {
    return this.categoryService.getCategory();
  }
}
