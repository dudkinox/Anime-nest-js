export class ListAnimeResponse {
  code: number;
  message: string;
  ttl: number;
  data: dataList;
}

export class dataList {
  cards: card[];
}

export class card {
  card_type: string;
  title: string;
  cover: string;
  view: string;
  styles: string;
  season_id: number;
  episode_id: number;
  index_show: string;
  label: number;
  rank_info: string;
  view_history: string;
  pub_time_text: string;
}
