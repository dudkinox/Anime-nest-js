import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [HttpModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
