export interface IUser {
    id: string
    email: string
    created_at: string
    name: string
    avatar_url: string
  }

 export interface ApiResponse {
    data: TAnime[];
    pagination?: {
      total: number;
      current_page: number;
      last_page: number;
    };
  }
  export interface IAddAnimeToHistory {
    videoElement: HTMLVideoElement | null;
    animeId: number;
    animeName: string;
    animePoster: string;
    episodeAnime: number;
    code: string
  }
  export interface IAnimeHistoryRecord {
    currentTime: number;
    episode: number;
  }

  export interface IRealTimeUpdate {
    animeId: number;
    episodeAnime: number;
    timer: number;
    realTimeUpdate: string;
  }

  export interface IAddAnime {
    animeId: number;
    userId: string;
    current_Time: number;
    duration_Time: number;
    nameAnime: string;
    img: string | null;
    episode: number;
    updated: number;
    code: string
    
  }
  export interface IAnimeStatus{
    img: string;
    nameAnime: string;
    animeId: number;
    statusId: string;
    statusRu: string;
    statusEn: string
  }

 export interface IRegisterForm {
    name: string
    email: string
    password: string
  }
  export interface ILoginForm {
    email: string
    password: string
  }
  interface ISeason {
    string: string
    code: number
    year: number
    week_day: number
  }
  export interface IAnimeCard{
    id: number
    code: string
    name: {
      english: string
      main: string
    }
    poster: string
    description: string
    season: ISeason
    year: string
  }

  export type TUserResponse<T = unknown> = 
  | { data: T; error: null }
  | { data: null; error: { message: string } }

  interface IAnimeBase {
    id: number;
    code: string;
    description: string;
    year: string;
    updated: number;
    announce: string | null;
    franchises: [];
    genres: [];
    in_favorites: number;
    player: IAnimePlayer;
    last_change: number;
    name: {
      english: string;
      main: string;
      alternative: string | null;
    };
    season: ISeason;
    status: {
      string: string;
      code: number;
    };
    team: {
      voice: string[]
    };
    torrents: object;
    type: {
      code: number;
      string: string;
      episodes: number;
      full_string: string;
      length: number;
    };
  }

  export interface IHls{
    fhd: string;
    hd: string;
    sd: string;
  }

  export interface IEpisode {
    created_timestamp: number;
    episode: number;
    hls: {[key: string]: IHls};
    name: string;
    preview: string;
    skips: {
      ending: [];
      opening: [];
      uuid: string;
    };
  }
  
  export interface IAnimePlayer {
    
      alternative_player: string | null;
      episodes: {
        first: number;
        last: number;
        string: string;
      };
      host: string | null;
      list: {[key: string]: IEpisode};
    
  }
  
  interface IAnimePosters {
    poster: {
      original: string;
      preview: string;
    }
  }
  
 export type TAnime = IAnimeBase & IAnimePosters;