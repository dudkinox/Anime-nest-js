import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
// import { CategoryEnum } from 'src/enum/categoryEnum';

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
    const data = [];

    await this.httpService
      .get(
        `https://api.bilibili.tv/intl/gateway/web/v2/anime/more_anime?pn=${page}&ps=${pagesize}&platform=${platform}&s_locale=${s_locale}`,
      )
      .forEach((item) => {
        data.push(item.data);
      });

    return data;
  }
}
