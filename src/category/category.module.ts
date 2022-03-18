import { Module } from '@nestjs/common';
import { CategoryService } from './category-service/category-service.service';
import { CategoryController } from './category-controller/category-controller.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
