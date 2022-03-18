import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  async getBypass(
    page: string,
    pagesize: string,
    platform: string,
    s_locale: string,
  ): Promise<any> {
    const result = [];
    await this.httpService
      .get(
        `https://api.bilibili.tv/intl/gateway/web/v2/ogv/index/items?page=${page}&pagesize=${pagesize}&platform=${platform}&s_locale=${s_locale}`,
      )
      .forEach((item) => {
        result.push(item.data.data.cards);
      });

    return result[0];
  }
}
