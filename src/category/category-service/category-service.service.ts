import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CategoryEnum } from 'src/enum/categoryEnum';
import { stringify } from 'querystring';

@Injectable()
export class CategoryService {
  constructor(private httpService: HttpService) {}

  checkCategory(item: any, result: any[], keyword: string): any[] {
    for (let i = 0; i < item.data.data.cards.length; i++) {
      if (item.data.data.cards[i].styles.includes(keyword)) {
        result.push(item.data.data.cards[i]);
      }
    }
    return result;
  }

  async getCategory(
    style: string,
    page: string,
    pagesize: string,
    platform: string,
    s_locale: string,
  ): Promise<any> {
    const result = { category: [] };
    await this.httpService
      .get(
        `https://api.bilibili.tv/intl/gateway/web/v2/ogv/index/items?page=${page}&pagesize=${pagesize}&platform=${platform}&s_locale=${s_locale}`,
      )
      .forEach((item) => {
        switch (Number(style)) {
          case CategoryEnum.Yaoi:
            result.category.push(
              this.checkCategory(item, result.category, 'ยาโอย'),
            );
            break;
          case CategoryEnum.Phantasy:
            result.category.push(
              this.checkCategory(item, result.category, 'แฟนตาซี'),
            );
            break;
          case CategoryEnum.Drama:
            result.category.push(
              this.checkCategory(item, result.category, 'ดราม่า'),
            );
            break;
          case CategoryEnum.Action:
            result.category.push(
              this.checkCategory(item, result.category, 'ต่อสู้'),
            );
            break;
          case CategoryEnum.Romantic:
            result.category.push(
              this.checkCategory(item, result.category, 'โรแมนติก'),
            );
            break;
          case CategoryEnum.SciFi:
            result.category.push(
              this.checkCategory(item, result.category, 'ไซ-ไฟ'),
            );
            break;
          case CategoryEnum.Avengers:
            result.category.push(
              this.checkCategory(item, result.category, 'ผจญภัย'),
            );
            break;
          case CategoryEnum.History:
            result.category.push(
              this.checkCategory(item, result.category, 'ประวัติศาสตร์'),
            );
            break;
          case CategoryEnum.Comedy:
            result.category.push(
              this.checkCategory(item, result.category, 'ตลก'),
            );
            break;
          case CategoryEnum.life:
            result.category.push(
              this.checkCategory(item, result.category, 'ชีวิตประจำวัน'),
            );
            break;
          case CategoryEnum.music:
            result.category.push(
              this.checkCategory(item, result.category, 'ดนตรี'),
            );
            break;
          case CategoryEnum.school:
            result.category.push(
              this.checkCategory(item, result.category, 'โรงเรียน'),
            );
            break;
        }
      });

    return result;
  }
}
