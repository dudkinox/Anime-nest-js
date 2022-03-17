import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { ListAnimeResponse } from './models/BypassModel';
import { NutModel } from './models/NutModel';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  async getBypass(
    page: string,
    pagesize: string,
    platform: string,
    s_locale: string,
  ): Promise<any> {
    var result = [];
    await this.httpService
      .get(
        `https://api.bilibili.tv/intl/gateway/web/v2/ogv/index/items?page=${page}&pagesize=${pagesize}&platform=${platform}&s_locale=${s_locale}`,
      )
      .forEach((item) => {
        result.push(item.data.data.cards);
      });

    return result[0];
  }
  getTest(): string {
    const test = this.httpService.get<NutModel[]>(
      'https://api-food-nut.herokuapp.com/api/store/imgView',
    );
    console.log(test.forEach((item) => console.log(item.data)));

    return 'test';
  }
}
