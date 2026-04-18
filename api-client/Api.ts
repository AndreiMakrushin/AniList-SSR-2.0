/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * enums.media.videos.video.origin.type
 * Перечисление типов источников видео
 * @example "YOUTUBE_PLAYLIST"
 */
export enum EnumsMediaVideosVideoOriginType {
  YOUTUBE_PLAYLIST = "YOUTUBE_PLAYLIST",
}

/**
 * enums.anime.torrents.torrentMember.role
 * Список ролей участников торрента
 */
export enum EnumsAnimeTorrentsTorrentMemberRole {
  HEVC = "HEVC",
}

/**
 * enums.anime.torrents.torrent.type
 * Список возможных значений источника видео (тип релиза)
 */
export enum EnumsAnimeTorrentsTorrentType {
  BDRip = "BDRip",
  HDRip = "HDRip",
  TVRip = "TVRip",
  WEBRip = "WEBRip",
  DTVRip = "DTVRip",
  DVDRip = "DVDRip",
  HDTVRip = "HDTVRip",
  WEBDL = "WEB-DL",
  WEBDLRip = "WEB-DLRip",
}

/**
 * enums.anime.torrents.torrent.quality
 * Список возможных значений качества видео в торренте
 */
export enum EnumsAnimeTorrentsTorrentQuality {
  Value360P = "360p",
  Value480P = "480p",
  Value576P = "576p",
  Value720P = "720p",
  Value1080P = "1080p",
  Value2K = "2k",
  Value4K = "4k",
  Value8K = "8k",
}

/**
 * enums.anime.torrents.torrent.color
 * Список возможных значений глубины цвета видеодорожки
 */
export enum EnumsAnimeTorrentsTorrentColor {
  Value8Bit = "8bit",
  Value10Bit = "10Bit",
}

/**
 * enums.anime.torrents.torrent.codec
 * Список возможных значений кодека видеодорожки в торренте
 */
export enum EnumsAnimeTorrentsTorrentCodec {
  AV1 = "AV1",
  X264AVC = "x264/AVC",
  X265HEVC = "x265/HEVC",
  X265HqHEVCHQ = "x265hq/HEVC-HQ",
}

/**
 * enums.anime.releases.release.member.role
 * Роль участника релиза
 */
export enum EnumsAnimeReleasesReleaseMemberRole {
  Poster = "poster",
  Timing = "timing",
  Voicing = "voicing",
  Editing = "editing",
  Decorating = "decorating",
  Translating = "translating",
}

/** enums.anime.releases.release.type */
export enum EnumsAnimeReleasesReleaseType {
  TV = "TV",
  ONA = "ONA",
  WEB = "WEB",
  OVA = "OVA",
  OAD = "OAD",
  MOVIE = "MOVIE",
  DORAMA = "DORAMA",
  SPECIAL = "SPECIAL",
}

/** enums.anime.releases.release.season */
export enum EnumsAnimeReleasesReleaseSeason {
  Winter = "winter",
  Spring = "spring",
  Summer = "summer",
  Autumn = "autumn",
}

/** enums.anime.releases.release.publishDay */
export enum EnumsAnimeReleasesReleasePublishDay {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7,
}

/** enums.anime.releases.release.ageRating */
export enum EnumsAnimeReleasesReleaseAgeRating {
  R0_PLUS = "R0_PLUS",
  R6_PLUS = "R6_PLUS",
  R12_PLUS = "R12_PLUS",
  R16_PLUS = "R16_PLUS",
  R18_PLUS = "R18_PLUS",
}

/** enums.anime.catalog.filter.sorting */
export enum EnumsAnimeCatalogFilterSorting {
  FRESH_AT_DESC = "FRESH_AT_DESC",
  FRESH_AT_ASC = "FRESH_AT_ASC",
  RATING_DESC = "RATING_DESC",
  RATING_ASC = "RATING_ASC",
  YEAR_DESC = "YEAR_DESC",
  YEAR_ASC = "YEAR_ASC",
}

/** enums.anime.catalog.filter.publishStatus */
export enum EnumsAnimeCatalogFilterPublishStatus {
  IS_ONGOING = "IS_ONGOING",
  IS_NOT_ONGOING = "IS_NOT_ONGOING",
}

/** enums.anime.catalog.filter.productionStatus */
export enum EnumsAnimeCatalogFilterProductionStatus {
  IS_IN_PRODUCTION = "IS_IN_PRODUCTION",
  IS_NOT_IN_PRODUCTION = "IS_NOT_IN_PRODUCTION",
}

/**
 * enums.ads.statistics.event.type
 * Типы событий рекламной статистики
 */
export enum EnumsAdsStatisticsEventType {
  AD_VAST_SHOW = "AD_VAST_SHOW",
  AD_VAST_REQUEST = "AD_VAST_REQUEST",
  AD_BANNER_VIEW = "AD_BANNER_VIEW",
  AD_BANNER_CLICK = "AD_BANNER_CLICK",
  MEDIA_PROMOTION_VIEW = "MEDIA_PROMOTION_VIEW",
  MEDIA_PROMOTION_CLICK = "MEDIA_PROMOTION_CLICK",
}

/**
 * enums.ads.banner.placement
 * Позиции размещения рекламных баннеров
 */
export enum EnumsAdsBannerPlacement {
  HOME_SUPPORT = "HOME_SUPPORT",
  RELEASE_SIDEBAR = "RELEASE_SIDEBAR",
}

/** enums.accounts.users.user.favorite.filter.sorting */
export enum EnumsAccountsUsersUserFavoriteFilterSorting {
  CREATED_AT_DESC = "CREATED_AT_DESC",
  CREATED_AT_ASC = "CREATED_AT_ASC",
  FRESH_AT_DESC = "FRESH_AT_DESC",
  FRESH_AT_ASC = "FRESH_AT_ASC",
  RATING_DESC = "RATING_DESC",
  RATING_ASC = "RATING_ASC",
  YEAR_DESC = "YEAR_DESC",
  YEAR_ASC = "YEAR_ASC",
}

/**
 * enums.accounts.users.user.collection.type
 * Тип коллекции
 * @example "PLANNED"
 */
export enum EnumsAccountsUsersUserCollectionType {
  PLANNED = "PLANNED",
  WATCHED = "WATCHED",
  WATCHING = "WATCHING",
  POSTPONED = "POSTPONED",
  ABANDONED = "ABANDONED",
}

/** enums.accounts.users.user.social.type */
export enum EnumsAccountsUsersUserSocialType {
  Vk = "vk",
  Google = "google",
  Patreon = "patreon",
  Discord = "discord",
}

/**
 * Ошибка валидации  параметров
 * @example {"errors":{"parameter1":["Поле parameter1 обязательно для заполнения","Поле parameter1 должно быть числом"],"parameter2":["Поле parameter2 должно быть строкой"]}}
 */
export interface CommonsV1HttpResponses422Content {
  errors?: Record<string, string[]>;
}

export interface CommonsV1ModelsComponentsImage {
  /**
   * Ссылка на изображение
   * @example "/...GoH5bzLFS7A21DzacgUApScj7qJY1iMz.(jpg|webp)"
   */
  preview?: string;
  /**
   * Ссылка на изображение
   * @example "/.../GoH5bzLFS7A21DzacgUApScj7qJY1iMz.(jpg|webp)"
   */
  thumbnail?: string;
}

export type CommonsV1ModelsComponentsImageWithOptimized =
  CommonsV1ModelsComponentsImage & {
    optimized?: CommonsV1ModelsComponentsImage;
  };

export interface CommonsV1UtilsPaginationSchemesMeta {
  pagination?: {
    /** @example "1704" */
    total?: number;
    /** @example "10" */
    count?: number;
    /** @example "10" */
    per_page?: number;
    /** @example "5" */
    current_page?: number;
    /** @example "171" */
    total_pages?: number;
    links?: {
      /** @example "/api/version/path-to-resource?page=1" */
      previous?: string;
      /** @example "/api/version/path-to-resource?page=3" */
      next?: string;
    };
  };
}

/** responses.api.v1.accounts.otp.login */
export interface ResponsesApiV1AccountsOtpLogin {
  /** @example "eyJpdiI6ImJDeElkYzliNFBDb2VFMDdtdnZpdVE9PSIsInZhbHVlIjoiM0Y5SnVINno3NndBbUcvU2NPVjJhMmhTMllJdWd4WUlF==" */
  token?: string;
}

/** responses.api.v1.accounts.otp.get */
export interface ResponsesApiV1AccountsOtpGet {
  /** Данные по OTP коду */
  otp?: ModelsAccountsOtpV1Otp;
  /** @example 120 */
  remaining_time?: number;
}

/**
 * models.accounts.otp.v1.otp
 * Данные по OTP коду
 */
export interface ModelsAccountsOtpV1Otp {
  /** @example "058701" */
  code?: string;
  /** @example 1337 */
  user_id?: number;
  /** @example "n702175b-fa52-5251-a39z-d1f4af0w1cak" */
  device_id?: string;
  /**
   * Срок действия кода
   * @format date-time
   * @example "2021-09-28T19:40:26+00:00"
   */
  expired_at?: string;
}

/** responses.api.v1.accounts.users.me.collections.references.ageRatings */
export type ResponsesApiV1AccountsUsersMeCollectionsReferencesAgeRatings = {
  value?: EnumsAnimeReleasesReleaseAgeRating;
  /** Название типа */
  label?: string;
  /** Описание типа */
  description?: string;
}[];

/** responses.api.v1.accounts.users.me.collections.references.genres */
export type ResponsesApiV1AccountsUsersMeCollectionsReferencesGenres = {
  /** Идентификатор жанра */
  id?: number;
  /** Название жанра */
  name?: string;
}[];

/** responses.api.v1.accounts.users.me.collections.references.types */
export type ResponsesApiV1AccountsUsersMeCollectionsReferencesTypes = {
  value?: EnumsAnimeReleasesReleaseType;
  /** Описание типа */
  description?: string;
}[];

/**
 * responses.api.v1.accounts.users.me.collections.references.years
 * @example [2020,2021,2022,2023]
 */
export type ResponsesApiV1AccountsUsersMeCollectionsReferencesYears = number[];

/** responses.v1.accounts.users.collections.releases */
export interface ResponsesV1AccountsUsersCollectionsReleases {
  data?: (ModelsAnimeReleasesV1Release & {
    genres?: ModelsAnimeGenresV1Genre[];
  } & {
    episodes?: ModelsAnimeReleasesV1ReleaseEpisode[];
  })[];
  meta?: CommonsV1UtilsPaginationSchemesMeta;
}

/** responses.api.v1.accounts.users.me.favorites.references.ageRatings */
export type ResponsesApiV1AccountsUsersMeFavoritesReferencesAgeRatings = {
  value?: EnumsAnimeReleasesReleaseAgeRating;
  /** Название рейтинга */
  label?: string;
  /** Описание рейтинга */
  description?: string;
}[];

/** responses.api.v1.accounts.users.me.favorites.references.genres */
export type ResponsesApiV1AccountsUsersMeFavoritesReferencesGenres = {
  /** Идентификатор жанра */
  id?: number;
  /** Название жанра */
  name?: string;
}[];

/** responses.api.v1.accounts.users.me.favorites.references.sorting */
export type ResponsesApiV1AccountsUsersMeFavoritesReferencesSorting = {
  value?: EnumsAccountsUsersUserFavoriteFilterSorting;
  /** Название опции сортировки */
  label?: string;
  /** Описание опции сортировки */
  description?: string;
}[];

/** responses.api.v1.accounts.users.me.favorites.references.types */
export type ResponsesApiV1AccountsUsersMeFavoritesReferencesTypes = {
  value?: EnumsAnimeReleasesReleaseType;
  /** Описание типа релиза */
  description?: string;
}[];

/**
 * responses.api.v1.accounts.users.me.favorites.references.years
 * @example [2020,2021,2022,2023]
 */
export type ResponsesApiV1AccountsUsersMeFavoritesReferencesYears = number[];

/** responses.v1.accounts.users.me.favorites.releases */
export interface ResponsesV1AccountsUsersMeFavoritesReleases {
  data?: (ModelsAnimeReleasesV1Release & {
    genres?: ModelsAnimeGenresV1Genre[];
  } & {
    episodes?: ModelsAnimeReleasesV1ReleaseEpisode[];
  })[];
  meta?: CommonsV1UtilsPaginationSchemesMeta;
}

/** responses.v1.accounts.users.me.views.history */
export interface ResponsesV1AccountsUsersMeViewsHistory {
  data?: (ModelsAccountsUsersV1UserView & {
    release_episode?: ModelsAnimeReleasesV1ReleaseEpisode & {
      /** Данные по релизу */
      release?: ModelsAnimeReleasesV1Release;
    };
  })[];
  meta?: CommonsV1UtilsPaginationSchemesMeta;
}

/** responses.v1.accounts.users.auth.login */
export interface ResponsesV1AccountsUsersAuthLogin {
  /** @example "eyJpdiI6IjlhZTBTaU9QZ0pUQ0E5YzZzYzhWRWc9PSIsInZhbHVlIjoiSFZaVHF6Sm45UVBCVk13U1hFYWpRdm1IL0xWWTFpTCtKUUpacDhqSk9LZEY1N0R1MURsN3A5VWRvUFp2OU5YYSIsIm1hYyI6IjUyYTM1NmM5ZGNkNGRiOTFiZmM3Y2FhZmY1ZGQ2MTAzOTc4MDNlMGM2MDg1OWNiMjFlODRiNGIyZGRiNTU1YTIifQ==" */
  token?: string;
}

/** responses.v1.accounts.users.auth.social.authenticate */
export interface ResponsesV1AccountsUsersAuthSocialAuthenticate {
  /**
   * JWT токен авторизации
   * @example "eyJpdiI6IjlhZTBTaU9QZ0pUQ0E5YzZzYzhWRWc9PSIsInZhbHVlIjoiSFZaVHF6Sm45UVBCVk13U1hFYWpRdm1IL0xWWTFpTCtKUUpacDhqSk9LZEY1N0R1MURsN3A5VWRvUFp2OU5YYSIsIm1hYyI6IjUyYTM1NmM5ZGNkNGRiOTFiZmM3Y2FhZmY1ZGQ2MTAzOTc4MDNlMGM2MDg1OWNiMjFlODRiNGIyZGRiNTU1YTIifQ=="
   */
  token?: string;
}

/** responses.v1.accounts.users.auth.social.login */
export interface ResponsesV1AccountsUsersAuthSocialLogin {
  /**
   * Ссылка на oauth авторизацию через указанную социальную сеть
   * @example "https://oauth.vk.com/authorize?client_id=&redirect_uri=&scope=email&response_type=code&state=9xLcqDvd08tTPODsHAXgcidxOvpg3P7Nuc"
   */
  url?: string;
  /**
   * Ключ для аутентификации пройденной авторизации
   * @example "9xLcqDvd08tTPODsHAXgcidxOvpg3P7Nuc"
   */
  state?: string;
}

/** responses.v1.accounts.users.auth.logout */
export interface ResponsesV1AccountsUsersAuthLogout {
  /** @example "null" */
  token?: null;
}

/**
 * responses.v1.accounts.users.me.collections.delete
 * Результат удаления релизов из коллекций
 */
export type ResponsesV1AccountsUsersMeCollectionsDelete =
  ResponsesApiV1AccountsUsersMeCollectionsIdsItem[];

/** responses.api.v1.accounts.users.me.collections.ids */
export type ResponsesApiV1AccountsUsersMeCollectionsIds =
  ResponsesApiV1AccountsUsersMeCollectionsIdsItem[];

/**
 * responses.api.v1.accounts.users.me.collections.ids.item
 * Идентификатор релиза
 * @maxItems 2
 * @minItems 2
 */
export type ResponsesApiV1AccountsUsersMeCollectionsIdsItem =
  | number
  | EnumsAccountsUsersUserCollectionType;

/**
 * responses.v1.accounts.users.me.collections.update
 * Результат добавления релизов в коллекции
 */
export type ResponsesV1AccountsUsersMeCollectionsUpdate =
  ResponsesApiV1AccountsUsersMeCollectionsIdsItem[];

/**
 * responses.v1.accounts.users.me.favorites.delete
 * Список ID релизов, оставшихся в избранном после удаления
 * @example [9021,9022]
 */
export type ResponsesV1AccountsUsersMeFavoritesDelete =
  ResponsesV1AccountsUsersMeFavoritesIdsItem[];

/**
 * responses.v1.accounts.users.me.favorites.ids.item
 * @example 9023
 */
export type ResponsesV1AccountsUsersMeFavoritesIdsItem = number;

/**
 * responses.v1.accounts.users.me.favorites.ids
 * Список ID релизов в избранном
 * @example [9023,9024,9025]
 */
export type ResponsesV1AccountsUsersMeFavoritesIds =
  ResponsesV1AccountsUsersMeFavoritesIdsItem[];

/**
 * responses.v1.accounts.users.me.favorites.update
 * Список ID релизов в избранном
 * @example [9023,9024,9025]
 */
export type ResponsesV1AccountsUsersMeFavoritesUpdate =
  ResponsesV1AccountsUsersMeFavoritesIdsItem[];

/**
 * responses.v1.accounts.users.me.views.timecodes.item
 * @maxItems 3
 * @minItems 3
 */
export type ResponsesV1AccountsUsersMeViewsTimecodesItem =
  | string
  | number
  | boolean;

/** responses.v1.accounts.users.me.views.timecodes */
export type ResponsesV1AccountsUsersMeViewsTimecodes =
  ResponsesV1AccountsUsersMeViewsTimecodesItem[];

/**
 * models.users.v1.user.session
 * Данные по сессии пользователя
 */
export interface ModelsUsersV1UserSession {
  /**
   * Transform pattern
   * @example "XbSmRDA95bJXPk3E"
   */
  id?: string;
  /** @example 482903 */
  user_id?: number;
  /** Информация об устройстве */
  device?: {
    /** @example "Macintosh" */
    name?: string;
    /** @example "10.15" */
    version?: string;
    /** @example "Mac OS X" */
    platform?: string;
  };
  /** Информация о браузере */
  browser?: {
    /** @example "Chrome" */
    name?: string;
    /** @example "112.0" */
    version?: string;
  };
  /** Геолокация пользователя */
  location?: {
    /** @example "Russia" */
    country?: string;
    /** @example "RU" */
    iso_code?: string;
  };
  /**
   * Мобильное устройство
   * @example false
   */
  is_mobile?: boolean;
  /**
   * Десктопное устройство
   * @example true
   */
  is_desktop?: boolean;
  /**
   * IP-адрес
   * @example "192.168.1.1"
   */
  ip_address?: string;
  /**
   * User-Agent
   * @example "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"
   */
  user_agent?: string;
  /**
   * Текущая сессия
   * @example true
   */
  is_current?: boolean;
  /**
   * @format date-time
   * @example "2024-03-01T12:34:56+00:00"
   */
  last_active?: string;
}

/**
 * models.users.v1.user
 * Данные по пользователю
 */
export interface ModelsUsersV1User {
  /**
   * Transform pattern
   * @example 4837362
   */
  id?: number;
  /**
   * Отображается только собственный
   * @example "animeshnik_488"
   */
  login?: string;
  /**
   * Отображается только собственный
   * @example "animeshnik_488@protonmail.com"
   */
  email?: string;
  /** @example "Animeshnik488" */
  nickname?: string;
  avatar?: CommonsV1ModelsComponentsImageWithOptimized;
  /** Данные по торрентам */
  torrents?: {
    /**
     * passkey, отображается только собственный
     * @example "xBSmRDA95bJXPk3E"
     */
    passkey?: string;
    /**
     * Количество отданного, в байтах
     * @example 998234623
     */
    uploaded?: number;
    /**
     * Количество скачанного, в байтах
     * @example 2397162874432
     */
    downloaded?: number;
  };
  /**
   * Забанен ли пользоваель в данный момент
   * @example true
   */
  is_banned?: boolean;
  /**
   * @format date-time
   * @example "2019-03-31T20:43:52+00:00"
   */
  created_at?: string;
  /**
   * Отображение рекламы
   * @example false
   */
  is_with_ads?: boolean;
}

/** models.accounts.users.v1.user.view */
export interface ModelsAccountsUsersV1UserView {
  /**
   * ID записи просмотра
   * @example 123
   */
  id?: number;
  /**
   * Таймкод просмотра, в секундах от начала эпизода
   * @format float
   * @example 127.45
   */
  time?: number;
  /**
   * ID пользователя
   * @example 42
   */
  user_id?: number;
  /**
   * Флаг, просмотрен ли эпизод полностью
   * @example true
   */
  is_watched?: boolean;
  /**
   * Дата обновления записи
   * @format date-time
   * @example "2025-06-23T14:00:00+00:00"
   */
  updated_at?: string;
  /**
   * ID эпизода релиза
   * @example "9b5e26ee-598f-4b8b-b77e-188d3e456318"
   */
  release_episode_id?: string;
}

/**
 * models.ads.banners.v1.banner
 * Данные рекламного баннера
 */
export interface ModelsAdsBannersV1Banner {
  /** @example 101 */
  id?: number;
  /** @example "Смотри аниме без рекламы!" */
  title?: string;
  image?: CommonsV1ModelsComponentsImageWithOptimized;
  /** @example "CZkqkNu5u8N" */
  ad_erid?: string;
  /** @example "https://external.site/banner.jpg" */
  image_url?: string;
  /** @example "https://aniliberty.top/subscribe" */
  button_url?: string;
  /** Позиции размещения рекламных баннеров */
  placement?: EnumsAdsBannerPlacement;
  /** @example true */
  has_overlay?: boolean;
  /** @example "Подписаться" */
  button_title?: string;
  /** @example "Смотри любимые сериалы без ограничений" */
  description?: string;
  /** @example "7707083893" */
  ad_company_itn?: string;
  /** @example "ООО "Аниме Медиа Групп"" */
  ad_company_name?: string;
}

/** responses.api.v1.ads.vasts */
export type ResponsesApiV1AdsVasts = ModelsAdsVastsV1Vast[];

/**
 * models.ads.vasts.v1.vast
 * Данные по рекламе VAST
 */
export interface ModelsAdsVastsV1Vast {
  /** @example "17974e6e-da62-427b-9937-9021cf4cafe4" */
  id?: string;
  /** @example "https://example.com/vast.xml" */
  url?: string;
  /** @example "ERID123456789" */
  ad_erid?: string;
  /** @example "1234567890" */
  ad_company_itn?: string;
  /** @example "Company XYZ" */
  ad_company_name?: string;
}

/** responses.api.v1.anime.catalog.releases */
export interface ResponsesApiV1AnimeCatalogReleases {
  data?: (ModelsAnimeReleasesV1Release & {
    genres?: ModelsAnimeGenresV1Genre[];
  })[];
  meta?: CommonsV1UtilsPaginationSchemesMeta;
}

/** responses.api.v1.anime.catalog.references.ageRatings */
export type ResponsesApiV1AnimeCatalogReferencesAgeRatings = {
  value?: EnumsAnimeReleasesReleaseAgeRating;
  /**
   * Название типа
   * @example "PG-17"
   */
  label?: string;
  /**
   * Описание типа
   * @example "PG"
   */
  description?: string;
}[];

/** responses.api.v1.anime.catalog.references.genres */
export type ResponsesApiV1AnimeCatalogReferencesGenres = {
  /**
   * ID жанра
   * @example 23
   */
  id?: number;
  /**
   * Название жанра
   * @example "Мистика"
   */
  name?: string;
}[];

/** responses.api.v1.anime.catalog.references.productionStatuses */
export type ResponsesApiV1AnimeCatalogReferencesProductionStatuses = {
  value?: EnumsAnimeCatalogFilterProductionStatus;
  /**
   * Описание статуса
   * @example "Сейчас в озвучке"
   */
  description?: string;
}[];

/** responses.api.v1.anime.catalog.references.publishStatuses */
export type ResponsesApiV1AnimeCatalogReferencesPublishStatuses = {
  value?: EnumsAnimeCatalogFilterPublishStatus;
  /**
   * Описание статуса
   * @example "Онгоинг"
   */
  description?: string;
}[];

/** responses.v1.anime.catalog.references.seasons */
export type ResponsesV1AnimeCatalogReferencesSeasons = {
  value?: EnumsAnimeReleasesReleaseSeason;
  /**
   * Название сезона
   * @example "Зима"
   */
  description?: string;
}[];

/** responses.v1.anime.catalog.references.sorting */
export type ResponsesV1AnimeCatalogReferencesSorting = {
  value?: EnumsAnimeCatalogFilterSorting;
  /**
   * Название типа
   * @example "Самый низкий рейтинг"
   */
  label?: string;
  /**
   * Описание типа
   * @example "Сначала отобразятся самые непопулярные релизы"
   */
  description?: string;
}[];

/** responses.v1.anime.catalog.references.types */
export type ResponsesV1AnimeCatalogReferencesTypes = {
  value?: EnumsAnimeReleasesReleaseType;
  /**
   * Название типа
   * @example "ТВ"
   */
  description?: string;
}[];

/**
 * responses.v1.anime.catalog.references.years
 * Массив годов
 * @example [2020,2021,2022,2023]
 */
export type ResponsesV1AnimeCatalogReferencesYears = number[];

/** responses.v1.anime.franchises */
export type ResponsesV1AnimeFranchises = ModelsAnimeFranchisesV1Franchise[];

/** responses.v1.anime.franchise */
export type ResponsesV1AnimeFranchise = ModelsAnimeFranchisesV1Franchise & {
  franchise_releases?: (ModelsAnimeFranchisesV1FranchiseRelease & {
    /** Данные по релизу */
    release?: ModelsAnimeReleasesV1Release;
  })[];
};

/** responses.v1.anime.franchises.random */
export type ResponsesV1AnimeFranchisesRandom =
  ModelsAnimeFranchisesV1Franchise[];

/** responses.v1.anime.franchises.byRelease */
export type ResponsesV1AnimeFranchisesByRelease =
  (ModelsAnimeFranchisesV1Franchise & {
    franchise_releases?: (ModelsAnimeFranchisesV1FranchiseRelease & {
      /** Данные по релизу */
      release?: ModelsAnimeReleasesV1Release;
    })[];
  })[];

/**
 * models.anime.franchises.v1.franchise.release
 * Данные по релизам в франшизе
 */
export interface ModelsAnimeFranchisesV1FranchiseRelease {
  /**
   * ID связки релиз — франшиза
   * @example "db1ebabd-b4b8-4391-85f3-79294515641a"
   */
  id?: string;
  /**
   * Порядок сортировки
   * @example 2
   */
  sort_order?: number;
  /**
   * Идентификатор релиза
   * @example 9045
   */
  release_id?: number;
  /**
   * Идентификатор франшизы
   * @example "3f69ea9b-c202-4522-96b9-07a5de8aa963"
   */
  franchise_id?: string;
}

/**
 * models.anime.franchises.v1.franchise
 * Данные по франшизе
 */
export interface ModelsAnimeFranchisesV1Franchise {
  /**
   * Идентификатор франшизы
   * @example "116e17d2-e89f-4ffc-bfa4-b45ae4c41e92"
   */
  id?: string;
  /**
   * Название франшизы (на русском)
   * @example "Re: Жизнь в другом мире с нуля"
   */
  name?: string;
  /**
   * Название франшизы (на английском)
   * @example "Re: Zero kara Hajimeru Isekai Seikatsu"
   */
  name_english?: string;
  image?: CommonsV1ModelsComponentsImageWithOptimized;
  /**
   * Рейтинг франшизы
   * @example 8.45
   */
  rating?: number;
  /**
   * Год последнего релиза
   * @example 2023
   */
  last_year?: number;
  /**
   * Год первого релиза
   * @example 2010
   */
  first_year?: number;
  /**
   * Количество релизов
   * @example 10
   */
  total_releases?: number;
  /**
   * Общее количество эпизодов
   * @example 25
   */
  total_episodes?: number;
  /**
   * Общая длительность франшизы
   * @example "2 дня 5 часов"
   */
  total_duration?: string | null;
  /**
   * Общая длительность франшизы в секундах
   * @example 183600
   */
  total_duration_in_seconds?: number;
}

export type ResponsesApiV1AnimeGenres = ModelsAnimeGenresV1Genre[];

export type ResponsesApiV1AnimeGenresItem = ModelsAnimeGenresV1Genre;

export type ResponsesApiV1AnimeGenresList = ModelsAnimeGenresV1Genre[];

export interface ResponsesApiV1AnimeGenresReleases {
  data?: ModelsAnimeReleasesV1Release[];
  meta?: CommonsV1UtilsPaginationSchemesMeta;
}

/**
 * models.anime.genres.v1.genre
 * Данные по жанрам
 */
export interface ModelsAnimeGenresV1Genre {
  /** @example 21 */
  id?: number;
  /** @example "Комедия" */
  name?: string;
  image?: CommonsV1ModelsComponentsImageWithOptimized;
  /**
   * Общее количество релизов в этом жанре
   * @example 10
   */
  total_releases?: number;
}

export type ResponsesApiV1AnimeReleasesLatest =
  (ModelsAnimeReleasesV1Release & {
    genres?: ModelsAnimeGenresV1Genre[];
    /** Эпизод релиза */
    latest_episode?: ModelsAnimeReleasesV1ReleaseEpisode;
  })[];

export type ResponsesApiV1AnimeReleasesRandom = ModelsAnimeReleasesV1Release[];

/** responses.api.v1.anime.releases.recommended */
export type ResponsesApiV1AnimeReleasesRecommended =
  ModelsAnimeReleasesV1Release[];

export interface ResponsesApiV1AnimeReleasesList {
  data?: (ModelsAnimeReleasesV1Release & {
    genres?: ModelsAnimeGenresV1Genre[];
  } & {
    members?: ModelsAnimeReleasesV1ReleaseMember[];
  } & {
    episodes?: ModelsAnimeReleasesV1ReleaseEpisode[];
  } & {
    torrents?: ModelsAnimeTorrentsV1Torrent[];
  } & {
    sponsors?: ModelsAnimeSponsorsV1Sponsor[];
  })[];
  meta?: CommonsV1UtilsPaginationSchemesMeta;
}

export type ResponsesApiV1AnimeReleasesRelease =
  ModelsAnimeReleasesV1Release & {
    genres?: ModelsAnimeGenresV1Genre[];
    members?: ModelsAnimeReleasesV1ReleaseMember[];
    episodes?: ModelsAnimeReleasesV1ReleaseEpisode[];
    torrents?: ModelsAnimeTorrentsV1Torrent[];
    sponsors?: ModelsAnimeSponsorsV1Sponsor[];
  };

/** responses.api.v1.anime.releases.release.members */
export type ResponsesApiV1AnimeReleasesReleaseMembers =
  ModelsAnimeReleasesV1ReleaseMember[];

/** responses.api.v1.anime.releases.release.episodes.timecodes */
export type ResponsesApiV1AnimeReleasesReleaseEpisodesTimecodes =
  ModelsAccountsUsersV1UserView[];

export type ResponsesApiV1AnimeReleasesEpisode =
  ModelsAnimeReleasesV1ReleaseEpisode & {
    release?: ModelsAnimeReleasesV1Release & {
      episodes?: ModelsAnimeReleasesV1ReleaseEpisode[];
    };
  };

/** responses.api.v1.anime.releases.episode.timecode */
export type ResponsesApiV1AnimeReleasesEpisodeTimecode =
  ModelsAccountsUsersV1UserView;

/**
 * models.anime.releases.v1.release.member.role
 * Роль участника релиза
 */
export interface ModelsAnimeReleasesV1ReleaseMemberRole {
  /** Роль участника релиза */
  value?: EnumsAnimeReleasesReleaseMemberRole;
  /** @example "Озвучка" */
  description?: string;
}

/**
 * models.anime.releases.v1.release.member
 * Участник релиза
 */
export interface ModelsAnimeReleasesV1ReleaseMember {
  /** @example "uuid..." */
  id?: string;
  /** Роль участника релиза */
  role?: ModelsAnimeReleasesV1ReleaseMemberRole;
  /** Связанный с участником релиза пользователь */
  user?: ModelsAnimeReleasesV1ReleaseMemberUser | null;
  /** @example "Zvukar" */
  nickname?: string;
}

/**
 * models.anime.releases.v1.release.member.user
 * Краткая информация о пользователе
 */
export interface ModelsAnimeReleasesV1ReleaseMemberUser {
  /** @example 2346 */
  id?: number;
  avatar?: CommonsV1ModelsComponentsImageWithOptimized;
}

/**
 * models.anime.releases.v1.release.type
 * Тип релиза
 */
export interface ModelsAnimeReleasesV1ReleaseType {
  value?: EnumsAnimeReleasesReleaseType;
  /** @example "ТВ" */
  description?: string;
}

/**
 * models.anime.releases.v1.release.name
 * Название релиза
 */
export interface ModelsAnimeReleasesV1ReleaseName {
  /** @example "Мастера Меча Онлайн: Алисизация" */
  main?: string;
  /** @example "Sword Art Online: Alicization" */
  english?: string;
  /** @example "Война в Андерворлде, War of Underworld" */
  alternative?: string;
}

/**
 * models.anime.releases.v1.release.season
 * Сезон релиза
 */
export interface ModelsAnimeReleasesV1ReleaseSeason {
  value?: EnumsAnimeReleasesReleaseSeason;
  /** @example "Осень" */
  description?: string;
}

/**
 * models.anime.releases.v1.release.ageRating
 * Возрастное ограничение
 */
export interface ModelsAnimeReleasesV1ReleaseAgeRating {
  value?: EnumsAnimeReleasesReleaseAgeRating;
  /** @example "16+" */
  label?: string;
  /** @example false */
  is_adult?: boolean;
  /** @example "Для людей, достигших возраста шестнадцати лет (16+)" */
  description?: string;
}

/**
 * models.anime.releases.v1.release.publishDay
 * День выхода релиза
 */
export interface ModelsAnimeReleasesV1ReleasePublishDay {
  value?: EnumsAnimeReleasesReleasePublishDay;
  /** @example "Воскресенье" */
  description?: string;
}

/**
 * models.anime.releases.v1.release
 * Данные по релизу
 */
export interface ModelsAnimeReleasesV1Release {
  /**
   * Идентификатор релиза
   * @example 7439
   */
  id?: number;
  /** Тип релиза */
  type?: ModelsAnimeReleasesV1ReleaseType;
  /**
   * Год
   * @example 2018
   */
  year?: number;
  /** Название релиза */
  name?: ModelsAnimeReleasesV1ReleaseName;
  /**
   * Ссылка на релиз
   * @example "sword-art-online-alicization"
   */
  alias?: string;
  /** Сезон релиза */
  season?: ModelsAnimeReleasesV1ReleaseSeason;
  poster?: CommonsV1ModelsComponentsImageWithOptimized;
  /**
   * Дата поднятия релиза
   * @format date-time
   * @example "2019-12-29T23:06:39+00:00"
   */
  fresh_at?: string;
  /**
   * Дата создания релиза
   * @format date-time
   * @example "2019-12-29T23:06:39+00:00"
   */
  created_at?: string;
  /**
   * Дата обновления релиза
   * @format date-time
   * @example "2023-08-20T15:08:20+00:00"
   */
  updated_at?: string;
  /**
   * Релиз в данный момент выходит в стране производства
   * @example false
   */
  is_ongoing?: boolean;
  /** Возрастное ограничение */
  age_rating?: ModelsAnimeReleasesV1ReleaseAgeRating;
  /** День выхода релиза */
  publish_day?: ModelsAnimeReleasesV1ReleasePublishDay;
  /**
   * Описание релиза
   * @example "Underworld - мир, ранее недоступный человеческому пониманию..."
   */
  description?: string;
  /**
   * Важная информация / Оповещение
   * @example "Серии выходят по воскресеньям"
   */
  notification?: string;
  /**
   * Всего эпизодов
   * @example 36
   */
  episodes_total?: number;
  /**
   * Ссылка на внешний плеер
   * @example "//kodik.info/serial/..."
   */
  external_player?: string;
  /**
   * Релиз в работе / озвучивается
   * @example false
   */
  is_in_production?: boolean;
  /**
   * Блокировка по геолокации
   * @example false
   */
  is_blocked_by_geo?: boolean;
  /**
   * Релиз заблокирован правообладателем
   * @example false
   */
  is_blocked_by_copyrights?: boolean;
  /**
   * Рейтинг по добавлению в коллекцию
   * @example 25557
   */
  added_in_users_favorites?: number;
  /**
   * Средняя продолжительность серий
   * @example 25
   */
  average_duration_of_episode?: number;
  /**
   * Кол-во добавлений в PLANNED коллекцию
   * @example 2457
   */
  added_in_planned_collection?: number;
  /**
   * Кол-во добавлений в WATCHED коллекцию
   * @example 467
   */
  added_in_watched_collection?: number;
  /**
   * Кол-во добавлений в WATCHING коллекцию
   * @example 346
   */
  added_in_watching_collection?: number;
  /**
   * Кол-во добавлений в POSTPONED коллекцию
   * @example 212
   */
  added_in_postponed_collection?: number;
  /**
   * Кол-во добавлений в ABANDONED коллекцию
   * @example 12
   */
  added_in_abandoned_collection?: number;
}

/**
 * models.anime.releases.v1.release.episode.skip
 * Тайминги пропуска опенинга или эндинга
 */
export interface ModelsAnimeReleasesV1ReleaseEpisodeSkip {
  /**
   * Время начала. Количество секунд от начала или конца эпизода
   * @example 6
   */
  start?: number;
  /**
   * Время окончания. Количество секунд от начала или конца эпизода
   * @example 125
   */
  stop?: number;
}

/**
 * models.anime.releases.v1.release.episode
 * Эпизод релиза
 */
export interface ModelsAnimeReleasesV1ReleaseEpisode {
  /**
   * Идентификатор эпизода
   * @example "9b5e26ee-598f-4b8b-b77e-188d3e456318"
   */
  id?: string;
  /**
   * Название эпизода
   * @example "Пролог"
   */
  name?: string;
  /**
   * Номер эпизода. Может быть целым или дробным числом (например, 5 или 23.5)
   * @example 12.5
   */
  ordinal?: number;
  /** Тайминги пропуска опенинга или эндинга */
  ending?: ModelsAnimeReleasesV1ReleaseEpisodeSkip;
  /** Тайминги пропуска опенинга или эндинга */
  opening?: ModelsAnimeReleasesV1ReleaseEpisodeSkip;
  preview?: CommonsV1ModelsComponentsImageWithOptimized;
  /** Ссылка на поток 480p */
  hls_480?: string;
  /** Ссылка на поток 720p */
  hls_720?: string;
  /** Ссылка на поток 1080p */
  hls_1080?: string;
  /**
   * Длительность эпизода в секундах
   * @example 1432
   */
  duration?: number;
  /**
   * Id эпизода на Rutube
   * @example "c6cc4d620b1d4338901770a44b3e82f4"
   */
  rutube_id?: string;
  /**
   * Id эпизода на Youtube
   * @example "dQw4w9WgXcQ"
   */
  youtube_id?: string;
  /**
   * Дата обновления эпизода
   * @format date-time
   * @example "2021-11-25T18:46:30+00:00"
   */
  updated_at?: string;
  /**
   * Порядковый номер эпизода для сортировки
   * @example 12
   */
  sort_order?: number;
  /**
   * Идентификатор релиза
   * @example 9324
   */
  release_id?: number;
  /**
   * Название эпизода на английском
   * @example "Prologue"
   */
  name_english?: string;
}

/** responses.v1.anime.schedule.now */
export interface ResponsesV1AnimeScheduleNow {
  today?: ModelsAnimeScheduleV1ReleaseInSchedule[];
  tomorrow?: ModelsAnimeScheduleV1ReleaseInSchedule[];
  yesterday?: ModelsAnimeScheduleV1ReleaseInSchedule[];
}

/** responses.v1.anime.schedule.week */
export interface ResponsesV1AnimeScheduleWeek {
  data?: ModelsAnimeScheduleV1ReleaseInSchedule[];
}

/**
 * models.anime.schedule.v1.releaseInSchedule
 * Данные по релизу в расписании
 */
export interface ModelsAnimeScheduleV1ReleaseInSchedule {
  /** Данные по релизу */
  release?: ModelsAnimeReleasesV1Release;
  /** @example true */
  full_season_is_released?: boolean;
  /** Эпизод релиза */
  published_release_episode?: ModelsAnimeReleasesV1ReleaseEpisode;
  /** @example 8 */
  next_release_episode_number?: number | null;
}

/**
 * models.anime.sponsors.v1.sponsor
 * Данные по спонсорам
 */
export interface ModelsAnimeSponsorsV1Sponsor {
  /**
   * Transform pattern
   * @example "UUID"
   */
  id?: string;
  /** @example "Sponsor name" */
  title?: string;
  /** @example "Лучший спонсор в мире!" */
  description?: string;
  /** @example "Переходи по ссылке" */
  url_title?: string;
  /** @example "https://yandex.ru" */
  url?: string;
}

export interface ResponsesApiV1AnimeTorrents {
  data?: (ModelsAnimeTorrentsV1Torrent & {
    torrent_members?: (ModelsAnimeTorrentsV1TorrentMember & {
      /** Данные по связанному с участником торрента пользователю */
      user?: ModelsAnimeTorrentsV1TorrentMemberUser;
    })[];
  } & {
    /** Данные по релизу */
    release?: ModelsAnimeReleasesV1Release;
  })[];
  meta?: CommonsV1UtilsPaginationSchemesMeta;
}

export type ResponsesApiV1AnimeTorrent = ModelsAnimeTorrentsV1Torrent & {
  torrent_members?: (ModelsAnimeTorrentsV1TorrentMember & {
    /** Данные по связанному с участником торрента пользователю */
    user?: ModelsAnimeTorrentsV1TorrentMemberUser;
  })[];
} & {
  /** Данные по релизу */
  release?: ModelsAnimeReleasesV1Release;
};

export type ResponsesApiV1AnimeTorrentsReleaseTorrents =
  (ModelsAnimeTorrentsV1Torrent & {
    torrent_members?: (ModelsAnimeTorrentsV1TorrentMember & {
      /** Данные по связанному с участником торрента пользователю */
      user?: ModelsAnimeTorrentsV1TorrentMemberUser;
    })[];
  } & {
    /** Данные по релизу */
    release?: ModelsAnimeReleasesV1Release;
  })[];

/**
 * models.anime.torrents.v1.torrent.member.role
 * Роль, которую выполняет участник торрента
 */
export interface ModelsAnimeTorrentsV1TorrentMemberRole {
  /** Список ролей участников торрента */
  value?: EnumsAnimeTorrentsTorrentMemberRole;
  /** @example "HEVC" */
  description?: string;
}

/**
 * models.anime.torrents.v1.torrent.member
 * Данные по участнику торрента
 */
export interface ModelsAnimeTorrentsV1TorrentMember {
  /** @example "6240acf7-4f62-4de9-9cc0-b3984ccc2b35" */
  id?: string;
  /** Роль, которую выполняет участник торрента */
  role?: ModelsAnimeTorrentsV1TorrentMemberRole;
  /** @example "Tuxoid" */
  nickname?: string;
  /** @example "https://t.me/Animeshnik488" */
  external_url?: string;
}

/**
 * models.anime.torrents.v1.torrent.member.user
 * Данные по связанному с участником торрента пользователю
 */
export interface ModelsAnimeTorrentsV1TorrentMemberUser {
  /** @example 2346 */
  id?: number;
  avatar?: CommonsV1ModelsComponentsImageWithOptimized;
}

/**
 * models.anime.torrents.v1.torrent.type
 * Тип источника видео в торренте
 */
export interface ModelsAnimeTorrentsV1TorrentType {
  /** Список возможных значений источника видео (тип релиза) */
  value?: EnumsAnimeTorrentsTorrentType;
  /** @example "WEBRip" */
  description?: string;
}

/**
 * models.anime.torrents.v1.torrent.quality
 * Качество видеодорожки в торренте
 */
export interface ModelsAnimeTorrentsV1TorrentQuality {
  /** Список возможных значений качества видео в торренте */
  value?: EnumsAnimeTorrentsTorrentQuality;
  /** @example "1080p" */
  description?: string;
}

/**
 * models.anime.torrents.v1.torrent.codec
 * Информация о кодеке видео в торренте
 */
export interface ModelsAnimeTorrentsV1TorrentCodec {
  /** Список возможных значений кодека видеодорожки в торренте */
  value?: EnumsAnimeTorrentsTorrentCodec;
  /** @example "AVC" */
  label?: string;
  /** @example "x264/AVC" */
  description?: string;
  /**
   * Цвет лейбла
   * @example "#FFF"
   */
  label_color?: string;
  /**
   * Отображать ли лейбл рядом с торрентом
   * @example true
   */
  label_is_visible?: boolean;
}

/**
 * models.anime.torrents.v1.torrent.color
 * Цветовая глубина видеодорожки в торренте
 */
export interface ModelsAnimeTorrentsV1TorrentColor {
  /** Список возможных значений глубины цвета видеодорожки */
  value?: EnumsAnimeTorrentsTorrentColor;
  /** @example "8-bit" */
  description?: string;
}

/**
 * models.anime.torrents.v1.torrent
 * Данные по торренту
 */
export interface ModelsAnimeTorrentsV1Torrent {
  /** @example 18523 */
  id?: number;
  /** @example "8a8fb94b1bd22b44a116336bab6bf209d0ac3a90" */
  hash?: string;
  /**
   * Размер торрент-файла в байтах
   * @example 7356495551
   */
  size?: number;
  /** Тип источника видео в торренте */
  type?: ModelsAnimeTorrentsV1TorrentType;
  /** Цветовая глубина видеодорожки в торренте */
  color?: ModelsAnimeTorrentsV1TorrentColor;
  /** Информация о кодеке видео в торренте */
  codec?: ModelsAnimeTorrentsV1TorrentCodec;
  /** @example "Shaman King (2021) - AniLiberty.TOP [WEB-Rip 1080p]" */
  label?: string;
  /** Качество видеодорожки в торренте */
  quality?: ModelsAnimeTorrentsV1TorrentQuality;
  /** @example "magnet:?xt=urn:btih:QPYNLG5Y2LA2KHB7SZCQF2W3..." */
  magnet?: string;
  /** @example "Shaman King (2021) - AniLiberty.TOP [WEB-Rip 1080p].torrent" */
  filename?: string;
  /**
   * Количество сидеров
   * @example 234
   */
  seeders?: number;
  /**
   * Битрейт, Кбит/сек
   * @example 3400
   */
  bitrate?: number;
  /**
   * Количество личеров
   * @example 58
   */
  leechers?: number;
  /**
   * Порядок сортировки торрента внутри релиза
   * @example 2
   */
  sort_order?: number;
  /**
   * @format date-time
   * @example "2021-09-22T16:20:38+00:00"
   */
  updated_at?: string;
  /**
   * Является ли торрент хардсабом
   * @example true
   */
  is_hardsub?: boolean;
  /**
   * Описание торрента
   * @example "1-17 + OVA(1-4)"
   */
  description?: string;
  /**
   * @format date-time
   * @example "2021-09-21T11:45:00+00:00"
   */
  created_at?: string;
  /**
   * Общее количество скачиваний торрента
   * @example 13538
   */
  completed_times?: number;
}

export type ResponsesApiV1AppSearchReleases = ModelsAnimeReleasesV1Release[];

/** responses.v1.app.status */
export interface ResponsesV1AppStatus {
  request?: {
    /** @example "192.168.1.1" */
    ip?: string;
    /** @example "Russia" */
    country?: string;
    /** @example "RU" */
    iso_code?: string;
    /** @example "Europe/Moscow" */
    timezone?: string;
  };
  /** @example true */
  is_alive?: boolean;
  /** @example ["https://aniliberty.top"] */
  available_api_endpoints?: string[];
}

/** responses.v1.media.promotions */
export interface ResponsesV1MediaPromotions {
  data?: ModelsMediaPromotionsV1Promotion[];
}

/**
 * models.media.promotions.v1.promotion
 * Данные по промо-материалам
 */
export interface ModelsMediaPromotionsV1Promotion {
  /** @example "bad864a4-d1b9-473f-898f-da8ee800ef87" */
  id?: string;
  /**
   * Кастомная ссылка на промо-материал
   * @example "https://espritgames.ru/dragoncontract/promotions/getdragon"
   */
  url?: string;
  /**
   * Кастомная подпись к ссылке
   * @example "Перейти на сайт"
   */
  url_label?: string;
  image?: CommonsV1ModelsComponentsImageWithOptimized;
  /**
   * Кастомное название промо-материала
   * @example "Dragon Contract"
   */
  title?: string;
  /**
   * Кастомное описание промо-материала
   * @example "ИСПЫТАЙ СВОЮ ПАМЯТЬ! Собери все пары карточек правильно, и получи дракона на старте!"
   */
  description?: string;
  /**
   * Флаг рекламной промо кампании
   * @example true
   */
  is_ad?: boolean;
  ad_erid?: string;
  ad_origin?: string;
  /** Данные по релизу */
  release?: ModelsAnimeReleasesV1Release;
  /**
   * Использовать темный оверлей
   * @example true
   */
  has_overlay?: boolean;
}

/** responses.v1.media.videos */
export interface ResponsesV1MediaVideos {
  data?: (ModelsMediaVideosV1VideoContent & {
    /** Данные по видео-источнику */
    origin?: ModelsMediaVideosV1VideoOrigin;
  })[];
}

/**
 * models.media.videos.v1.video.content
 * Данные по видео роликам
 */
export interface ModelsMediaVideosV1VideoContent {
  /** @example 57 */
  id?: number;
  /** @example "https://www.youtube.com/watch?v=8f6FpV4sB0I" */
  url?: string;
  /** @example "ТОП 10 САМЫХ ОЖИДАЕМЫХ АНИМЕ ОСЕНИ 2021" */
  title?: string;
  /**
   * Количество просмотров ролика
   * @example 34456
   */
  views?: number;
  image?: CommonsV1ModelsComponentsImageWithOptimized;
  /**
   * Количество комментариев под роликом
   * @example 532
   */
  comments?: number;
  /** @example "8f6FpV4sB0I" */
  video_id?: string;
  /**
   * @format date-time
   * @example "2021-09-22T16:20:38+00:00"
   */
  created_at?: string;
  /**
   * Дата последнего обновления данных
   * @format date-time
   * @example "2021-09-28T19:40:26+00:00"
   */
  updated_at?: string;
  /**
   * Видео является анонсом сезона
   * @example true
   */
  is_announce?: boolean;
}

/**
 * models.media.videos.v1.video.origin.type
 * Тип источника видео
 */
export interface ModelsMediaVideosV1VideoOriginType {
  /** Перечисление типов источников видео */
  value?: EnumsMediaVideosVideoOriginType;
  /** @example "YouTube плейлист" */
  description?: string;
}

/**
 * models.media.videos.v1.video.origin
 * Данные по видео-источнику
 */
export interface ModelsMediaVideosV1VideoOrigin {
  /** @example "e8fd32be-7f14-4c02-bf00-dbd26ecabfdb" */
  id?: string;
  /** @example "https://www.youtube.com/playlist?list=PL8_g6JPJBRglxkyQfNGugDyyQP11hL0-Q" */
  url?: string;
  /** Тип источника видео */
  type?: ModelsMediaVideosV1VideoOriginType;
  /** @example "Анонсы аниме-сезонов" */
  title?: string;
  /** @example "Плейлист с анонсами" */
  description?: string;
  /**
   * Видео-источник является анонсом сезона
   * @example true
   */
  is_announce?: boolean;
}

export type ResponsesApiV1Teams = ModelsTeamsV1Team[];

export type ResponsesApiV1TeamsRoles = ModelsTeamsV1TeamRole[];

export type ResponsesApiV1TeamsUsers = (ModelsTeamsV1TeamUser & {
  /** Данные по команде */
  team?: ModelsTeamsV1Team;
} & {
  /** Данные по аккаунту пользователю */
  user?: ModelsTeamsV1TeamUserAccount;
} & {
  roles?: ModelsTeamsV1TeamRole[];
})[];

/**
 * models.teams.v1.team.role
 * Данные по роли в команде
 */
export interface ModelsTeamsV1TeamRole {
  /** ID роли */
  id?: string;
  /** Название роли */
  title?: string;
  /** Цвет */
  color?: string;
  /** Порядок сортировки роли */
  sort_order?: number;
}

/**
 * models.teams.v1.team.user
 * Данные по анилибрийцу
 */
export interface ModelsTeamsV1TeamUser {
  /** ID анилибрийца */
  id?: string;
  /** Псевдоним анилибрийца в команде */
  nickname?: string;
  /** Флаг, указывающий, является ли пользователь стажером */
  is_intern?: boolean;
  /** Порядок сортировки внутри команды */
  sort_order?: number;
  /** Флаг, указывающий, находится ли пользователь в отпуске */
  is_vacation?: boolean;
}

/**
 * models.teams.v1.team.user.account
 * Данные по аккаунту пользователю
 */
export interface ModelsTeamsV1TeamUserAccount {
  /** ID анилибрийца */
  id?: number;
  /** Псевдоним анилибрийца в команде */
  nickname?: string;
  avatar?: CommonsV1ModelsComponentsImageWithOptimized;
}

/**
 * models.teams.v1.team
 * Данные по команде
 */
export interface ModelsTeamsV1Team {
  /** ID команды */
  id?: string;
  /** Название команды */
  title?: string;
  /** Порядок сортировки команды */
  sort_order?: number;
  /** Описание команды */
  description?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "/api/v1";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) => {
      if (input instanceof FormData) {
        return input;
      }

      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData());
    },
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const responseToParse = responseFormat ? response.clone() : response;
      const data = !responseFormat
        ? r
        : await responseToParse[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title AniLiberty
 * @version 1.0.0
 * @baseUrl /api/v1
 *
 * AniLiberty API V1 description
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  accounts = {
    /**
     * @description Запрашиваем новый одноразовый пароль
     *
     * @tags Аккаунты.ОдноразовыеПароли
     * @name 53594955E6C7F55F3787B13C20118A94
     * @summary Запрашивает OTP
     * @request POST:/accounts/otp/get
     * @secure
     */
    "53594955E6C7F55F3787B13C20118A94": (
      data: {
        /** @example "n702175b-fa52-5251-a39z-d1f4af0w1cak" */
        device_id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponsesApiV1AccountsOtpGet,
        void | CommonsV1HttpResponses422Content
      >({
        path: `/accounts/otp/get`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Присоединяем пользователя к выданному одноразовому паролю
     *
     * @tags Аккаунты.ОдноразовыеПароли
     * @name 7Fad0328B8Acfe70C095Adefd72C4612
     * @summary Присоединяем пользователя к выданному OTP
     * @request POST:/accounts/otp/accept
     * @secure
     */
    "7Fad0328B8Acfe70C095Adefd72C4612": (
      data: {
        /** @example 54233 */
        code: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void | CommonsV1HttpResponses422Content>({
        path: `/accounts/otp/accept`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Авторизуемся по выданному одноразовому паролю
     *
     * @tags Аккаунты.ОдноразовыеПароли
     * @name 790D35F354C43Efd3523B84A80Ead587
     * @summary Авторизуемся по OTP
     * @request POST:/accounts/otp/login
     * @secure
     */
    "790D35F354C43Efd3523B84A80Ead587": (
      data: {
        /** @example 54233 */
        code: number;
        /** @example "n702175b-fa52-5251-a39z-d1f4af0w1cak" */
        device_id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponsesApiV1AccountsOtpLogin,
        void | CommonsV1HttpResponses422Content
      >({
        path: `/accounts/otp/login`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Авторизация пользователя по логину и паролю. Создание сессии пользователя, выдача токена авторизации для использования в cookies или в Bearer Token
     *
     * @tags Аккаунты.Пользователи.Авторизация
     * @name 14Fa6A915A5B4509014A513E36168Abd
     * @summary Авторизация пользователя
     * @request POST:/accounts/users/auth/login
     * @secure
     */
    "14Fa6A915A5B4509014A513E36168Abd": (
      data: {
        /** @example "animeshnik_488" */
        login: string;
        /** @example "password" */
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesV1AccountsUsersAuthLogin, void>({
        path: `/accounts/users/auth/login`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Позволяет авторизовать пользователя через некоторые социальные сети
     *
     * @tags Аккаунты.Пользователи.Авторизация.СоциальныеСети
     * @name 0095F8A8662997958527805D12C27324
     * @summary Авторизация пользователя через социальные сети
     * @request GET:/accounts/users/auth/social/{provider}/login
     * @secure
     */
    "0095F8A8662997958527805D12C27324": (
      provider: EnumsAccountsUsersUserSocialType,
      params: RequestParams = {},
    ) =>
      this.request<ResponsesV1AccountsUsersAuthSocialLogin, void>({
        path: `/accounts/users/auth/social/${provider}/login`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Позволяет аутентифицировать авторизованного через социальную сеть пользователя
     *
     * @tags Аккаунты.Пользователи.Авторизация.СоциальныеСети
     * @name 42E1D4B7Dc7676B933Bcc6Bf6A9109Cf
     * @summary Аутентифицировать пользователя через социальные сети
     * @request GET:/accounts/users/auth/social/authenticate
     * @secure
     */
    "42E1D4B7Dc7676B933Bcc6Bf6A9109Cf": (
      query: {
        /** Ключ аутентификации */
        state: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesV1AccountsUsersAuthSocialAuthenticate, void>({
        path: `/accounts/users/auth/social/authenticate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Деавторизовать пользователя
     *
     * @tags Аккаунты.Пользователи.Авторизация
     * @name 132D66679910512B70001A8Bb5F25141
     * @summary Деавторизация пользователя
     * @request POST:/accounts/users/auth/logout
     * @secure
     */
    "132D66679910512B70001A8Bb5F25141": (params: RequestParams = {}) =>
      this.request<ResponsesV1AccountsUsersAuthLogout, void>({
        path: `/accounts/users/auth/logout`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Отправление ссылки на восстановление забытого пароля
     *
     * @tags Аккаунты.Пользователи.Авторизация.Пароль
     * @name D549714F7696A9126C11C3254303Cbe8
     * @summary Восстановление пароля
     * @request POST:/accounts/users/auth/password/forget
     * @secure
     */
    d549714F7696A9126C11C3254303Cbe8: (
      data: {
        /** @example "my_cool_anime_email@example.com" */
        email: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/accounts/users/auth/password/forget`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Сброс и установка нового пароля
     *
     * @tags Аккаунты.Пользователи.Авторизация.Пароль
     * @name 96E405C4Aad009C4C555165B0657B576
     * @summary Сброс и установка нового пароля
     * @request POST:/accounts/users/auth/password/reset
     * @secure
     */
    "96E405C4Aad009C4C555165B0657B576": (
      data: {
        /** @example "token_from_email" */
        token: string;
        /** @example "myNewCoolPassword" */
        password: string;
        /** @example "myNewCoolPassword" */
        password_confirmation: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void | CommonsV1HttpResponses422Content>({
        path: `/accounts/users/auth/password/reset`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Возвращает список возрастных рейтингов в коллекциях текущего пользователя
     *
     * @tags Аккаунты.Пользователи.Мое.Коллекции.Справочники
     * @name 8B157A7586E3C56605E42D0D328Ad854
     * @summary Список возрастных рейтингов в коллекциях пользователя
     * @request GET:/accounts/users/me/collections/references/age-ratings
     * @secure
     */
    "8B157A7586E3C56605E42D0D328Ad854": (params: RequestParams = {}) =>
      this.request<
        ResponsesApiV1AccountsUsersMeCollectionsReferencesAgeRatings,
        void
      >({
        path: `/accounts/users/me/collections/references/age-ratings`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список жанров в коллекциях текущего пользователя
     *
     * @tags Аккаунты.Пользователи.Мое.Коллекции.Справочники
     * @name Cdedb51Df9D04015C63F820E18Ae98D4
     * @summary Список жанров в коллекциях пользователя
     * @request GET:/accounts/users/me/collections/references/genres
     * @secure
     */
    cdedb51Df9D04015C63F820E18Ae98D4: (params: RequestParams = {}) =>
      this.request<
        ResponsesApiV1AccountsUsersMeCollectionsReferencesGenres,
        void
      >({
        path: `/accounts/users/me/collections/references/genres`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список типов в коллекциях текущего пользователя
     *
     * @tags Аккаунты.Пользователи.Мое.Коллекции.Справочники
     * @name 3Bfa46759Da920C8Dfb3Ab23F95B2B83
     * @summary Список типов в коллекциях пользователя
     * @request GET:/accounts/users/me/collections/references/types
     * @secure
     */
    "3Bfa46759Da920C8Dfb3Ab23F95B2B83": (params: RequestParams = {}) =>
      this.request<
        ResponsesApiV1AccountsUsersMeCollectionsReferencesTypes,
        void
      >({
        path: `/accounts/users/me/collections/references/types`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список годов в коллекциях текущего пользователя
     *
     * @tags Аккаунты.Пользователи.Мое.Коллекции.Справочники
     * @name 7Adae426Acd92Ba3F282Eb1Cb38Ce4C4
     * @summary Список годов в коллекциях пользователя
     * @request GET:/accounts/users/me/collections/references/years
     * @secure
     */
    "7Adae426Acd92Ba3F282Eb1Cb38Ce4C4": (params: RequestParams = {}) =>
      this.request<
        ResponsesApiV1AccountsUsersMeCollectionsReferencesYears,
        void
      >({
        path: `/accounts/users/me/collections/references/years`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает данные по идентификаторам релизов и типов коллекций авторизованного пользователя
     *
     * @tags Аккаунты.Пользователи.Мое.Коллекции
     * @name 3952A0264Ef53D5Cebaebac72B70Ea2A
     * @summary Список идентификаторов релизов добавленных в коллекции
     * @request GET:/accounts/users/me/collections/ids
     * @secure
     */
    "3952A0264Ef53D5Cebaebac72B70Ea2A": (params: RequestParams = {}) =>
      this.request<ResponsesApiV1AccountsUsersMeCollectionsIds[], void>({
        path: `/accounts/users/me/collections/ids`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает данные по релизам из определенной коллекции авторизованного пользователя
     *
     * @tags Аккаунты.Пользователи.Мое.Коллекции
     * @name Ff552F54874B00625454339A7C989109
     * @summary Список релизов добавленных в коллекцию [GET]
     * @request GET:/accounts/users/me/collections/releases
     * @secure
     */
    ff552F54874B00625454339A7C989109: (
      query: {
        /**
         * Номер страницы
         * @example 1
         */
        page?: number;
        /**
         * Ограничение на количество элементов
         * @example 10
         */
        limit?: number;
        /**
         * Тип коллекции
         * @example "RATING_DESC"
         */
        type_of_collection: EnumsAccountsUsersUserCollectionType;
        /**
         * Список идентификаторов жанров
         * @example "15,20"
         */
        "f[genres]"?: any;
        /**
         * Список типов релизов
         * @example ["TV","WEB"]
         */
        "f[types]"?: EnumsAnimeReleasesReleaseType[];
        /**
         * Минимальный год выхода релиза
         * @example "2016, 2018, 2019"
         */
        "f[years]"?: any;
        /**
         * Поисковый запрос
         * @example "Мастера меча"
         */
        "f[search]"?: any;
        /**
         * Список возрастных рейтингов
         * @example ["R6_PLUS","R12_PLUS"]
         */
        "f[age_ratings]"?: EnumsAnimeReleasesReleaseAgeRating[];
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponsesV1AccountsUsersCollectionsReleases,
        void | CommonsV1HttpResponses422Content
      >({
        path: `/accounts/users/me/collections/releases`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает данные по релизам из определенной коллекции авторизованного пользователя
     *
     * @tags Аккаунты.Пользователи.Мое.Коллекции
     * @name 713F5E158Bb307116510418108B79Ab2
     * @summary Список релизов добавленных в коллекцию [POST]
     * @request POST:/accounts/users/me/collections/releases
     * @secure
     */
    "713F5E158Bb307116510418108B79Ab2": (
      data: {
        /** @example 1 */
        page?: number;
        /** @example 15 */
        limit?: number;
        /** Тип коллекции */
        type_of_collection?: EnumsAccountsUsersUserCollectionType;
        f?: {
          /**
           * Список идентификаторов жанров
           * @example "15,20"
           */
          genres?: string;
          /**
           * Список типов релизов
           * @example ["TV","WEB"]
           */
          types?: EnumsAnimeReleasesReleaseType[];
          /**
           * Минимальный год выхода релиза
           * @example "2016, 2018, 2019"
           */
          years?: string;
          /**
           * Поисковый запрос
           * @example "Мастера меча"
           */
          search?: string;
          /**
           * Список возрастных рейтингов
           * @example ["R6_PLUS","R12_PLUS"]
           */
          age_ratings?: EnumsAnimeReleasesReleaseAgeRating[];
        };
        /** @example "id,type.description" */
        include?: string;
        /** @example "season.value,description" */
        exclude?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponsesV1AccountsUsersCollectionsReleases,
        void | CommonsV1HttpResponses422Content
      >({
        path: `/accounts/users/me/collections/releases`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавляет релизы в соответствующие коллекции авторизованного пользователя
     *
     * @tags Аккаунты.Пользователи.Мое.Коллекции
     * @name Cfc448915A4Cb9569951De2B0118Db9D
     * @summary Добавить релизы в коллекции
     * @request POST:/accounts/users/me/collections
     * @secure
     */
    cfc448915A4Cb9569951De2B0118Db9D: (
      data: {
        release_id: number;
        /** Тип коллекции */
        type_of_collection: EnumsAccountsUsersUserCollectionType;
      }[],
      params: RequestParams = {},
    ) =>
      this.request<
        ResponsesV1AccountsUsersMeCollectionsUpdate[],
        void | CommonsV1HttpResponses422Content
      >({
        path: `/accounts/users/me/collections`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Удаляет релизы из соответствующих коллекций авторизованного пользователя
     *
     * @tags Аккаунты.Пользователи.Мое.Коллекции
     * @name E7C7A8Cb031577E009C11A5128C63191
     * @summary Удалить релизы из коллекций
     * @request DELETE:/accounts/users/me/collections
     * @secure
     */
    e7C7A8Cb031577E009C11A5128C63191: (
      data: {
        release_id: number;
      }[],
      params: RequestParams = {},
    ) =>
      this.request<
        ResponsesV1AccountsUsersMeCollectionsDelete[],
        void | CommonsV1HttpResponses422Content
      >({
        path: `/accounts/users/me/collections`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список возрастных рейтингов в избранном текущего пользователя
     *
     * @tags Аккаунты.Пользователи.Мое.Избранное.Справочники
     * @name 0079B1666727Fca03A65Def7B2882Ce7
     * @summary Список возрастных рейтингов в избранном пользователя
     * @request GET:/accounts/users/me/favorites/references/age-ratings
     * @secure
     */
    "0079B1666727Fca03A65Def7B2882Ce7": (params: RequestParams = {}) =>
      this.request<
        ResponsesApiV1AccountsUsersMeFavoritesReferencesAgeRatings,
        void
      >({
        path: `/accounts/users/me/favorites/references/age-ratings`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список жанров в избранном текущего пользователя
     *
     * @tags Аккаунты.Пользователи.Мое.Избранное.Справочники
     * @name 5714Dc01Fd354C98F2A92E9103F41Df3
     * @summary Список жанров в избранном пользователя
     * @request GET:/accounts/users/me/favorites/references/genres
     * @secure
     */
    "5714Dc01Fd354C98F2A92E9103F41Df3": (params: RequestParams = {}) =>
      this.request<
        ResponsesApiV1AccountsUsersMeFavoritesReferencesGenres,
        void
      >({
        path: `/accounts/users/me/favorites/references/genres`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список опций сортировки в избранном текущего пользователя
     *
     * @tags Аккаунты.Пользователи.Мое.Избранное.Справочники
     * @name 4D9E1C473Afa35932A2Daf2715D7657C
     * @summary Список опций сортировки в избранном пользователя
     * @request GET:/accounts/users/me/favorites/references/sorting
     * @secure
     */
    "4D9E1C473Afa35932A2Daf2715D7657C": (params: RequestParams = {}) =>
      this.request<
        ResponsesApiV1AccountsUsersMeFavoritesReferencesSorting,
        void
      >({
        path: `/accounts/users/me/favorites/references/sorting`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список типов релизов в избранном текущего пользователя
     *
     * @tags Аккаунты.Пользователи.Мое.Избранное.Справочники
     * @name 8C7Dd07D3F58867144A0Fd88482Aadac
     * @summary Список типов релизов в избранном пользователя
     * @request GET:/accounts/users/me/favorites/references/types
     * @secure
     */
    "8C7Dd07D3F58867144A0Fd88482Aadac": (params: RequestParams = {}) =>
      this.request<ResponsesApiV1AccountsUsersMeFavoritesReferencesTypes, void>(
        {
          path: `/accounts/users/me/favorites/references/types`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        },
      ),

    /**
     * @description Возвращает список годов выхода релизов в избранном текущего пользователя
     *
     * @tags Аккаунты.Пользователи.Мое.Избранное.Справочники
     * @name Da82E99Bb7F630094Ff8Adb44Cc9Da5E
     * @summary Список годов выхода релизов в избранном пользователя
     * @request GET:/accounts/users/me/favorites/references/years
     * @secure
     */
    da82E99Bb7F630094Ff8Adb44Cc9Da5E: (params: RequestParams = {}) =>
      this.request<ResponsesApiV1AccountsUsersMeFavoritesReferencesYears, void>(
        {
          path: `/accounts/users/me/favorites/references/years`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        },
      ),

    /**
     * @description Возвращает данные по идентификаторам релизов из избранного авторизованного пользователя
     *
     * @tags Аккаунты.Пользователи.Мое.Избранное
     * @name 4706B730C52B2Dfad48751C7C10757Dc
     * @summary Список идентификаторов релизов добавленных в избранное
     * @request GET:/accounts/users/me/favorites/ids
     * @secure
     */
    "4706B730C52B2Dfad48751C7C10757Dc": (params: RequestParams = {}) =>
      this.request<ResponsesV1AccountsUsersMeFavoritesIds, void>({
        path: `/accounts/users/me/favorites/ids`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает данные по релизам из избранного текущего пользователя
     *
     * @tags Аккаунты.Пользователи.Мое.Избранное
     * @name 5Baafd8Eec6B0A60Ff67A4Ac6038F4A9
     * @summary Список релизов в избранном пользователя
     * @request GET:/accounts/users/me/favorites/releases
     * @secure
     */
    "5Baafd8Eec6B0A60Ff67A4Ac6038F4A9": (
      query?: {
        /**
         * Номер страницы
         * @example 1
         */
        page?: number;
        /**
         * Ограничение на количество элементов
         * @example 10
         */
        limit?: number;
        /**
         * Года выхода релиза
         * @example "2016, 2018, 2019"
         */
        "f[years]"?: any;
        /**
         * Список типов релизов
         * @example ["TV","WEB"]
         */
        "f[types]"?: EnumsAnimeReleasesReleaseType[];
        /**
         * Список идентификаторов жанров
         * @example "15,20"
         */
        "f[genres]"?: any;
        /**
         * Поисковый запрос
         * @example "Мастера меча"
         */
        "f[search]"?: any;
        /**
         * Тип сортировки
         * @example "RATING_DESC"
         */
        "f[sorting]"?: EnumsAccountsUsersUserFavoriteFilterSorting;
        /**
         * Список возрастных рейтингов
         * @example ["R6_PLUS","R12_PLUS"]
         */
        "f[age_ratings]"?: EnumsAnimeReleasesReleaseAgeRating[];
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponsesV1AccountsUsersMeFavoritesReleases,
        void | CommonsV1HttpResponses422Content
      >({
        path: `/accounts/users/me/favorites/releases`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает данные по релизам из избранного текущего пользователя
     *
     * @tags Аккаунты.Пользователи.Мое.Избранное
     * @name 89E379Bb7614921658D8Cbaa36B8Cbdd
     * @summary Список релизов в избранном пользователя
     * @request POST:/accounts/users/me/favorites/releases
     * @secure
     */
    "89E379Bb7614921658D8Cbaa36B8Cbdd": (
      data: {
        /**
         * Страница в выдаче
         * @example 1
         */
        page?: number;
        /**
         * Количество релизов в выдаче
         * @example 15
         */
        limit?: number;
        f?: {
          /**
           * Года выхода релиза
           * @example "2016, 2018, 2019"
           */
          years?: string;
          /**
           * Список типов релизов
           * @example ["TV","WEB"]
           */
          types?: EnumsAnimeReleasesReleaseType[];
          /**
           * Список идентификаторов жанров
           * @example "15,20"
           */
          genres?: string;
          /**
           * Поисковый запрос
           * @example "Мастера меча"
           */
          search?: string;
          sorting?: EnumsAccountsUsersUserFavoriteFilterSorting;
          /**
           * Список возрастных рейтингов
           * @example ["R6_PLUS","R12_PLUS"]
           */
          age_ratings?: EnumsAnimeReleasesReleaseAgeRating[];
        };
        /** @example "id,type.description" */
        include?: string;
        /** @example "season.value,description" */
        exclude?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponsesV1AccountsUsersMeFavoritesReleases,
        void | CommonsV1HttpResponses422Content
      >({
        path: `/accounts/users/me/favorites/releases`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавляет релизы в избранное авторизованного пользователя
     *
     * @tags Аккаунты.Пользователи.Мое.Избранное
     * @name 7050Ee79698Aa22D0B67D8D6A1Ec5A3B
     * @summary Добавить релизы в избранное
     * @request POST:/accounts/users/me/favorites
     * @secure
     */
    "7050Ee79698Aa22D0B67D8D6A1Ec5A3B": (
      data: {
        /** @example 9023 */
        release_id: number;
      }[],
      params: RequestParams = {},
    ) =>
      this.request<ResponsesV1AccountsUsersMeFavoritesUpdate, void>({
        path: `/accounts/users/me/favorites`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Удаляет релизы из избранного авторизованного пользователя
     *
     * @tags Аккаунты.Пользователи.Мое.Избранное
     * @name 1D04983F0Ba43D7C0Ad3Be4Bc567De1F
     * @summary Удалить релизы из избранного
     * @request DELETE:/accounts/users/me/favorites
     * @secure
     */
    "1D04983F0Ba43D7C0Ad3Be4Bc567De1F": (
      data: {
        /** @example 9023 */
        release_id: number;
      }[],
      params: RequestParams = {},
    ) =>
      this.request<ResponsesV1AccountsUsersMeFavoritesDelete, void>({
        path: `/accounts/users/me/favorites`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает данные профиля авторизованного пользователя
     *
     * @tags Аккаунты.Пользователи.Мое.Профиль
     * @name 69Fcaa197A8B8Cf6C6A4B8Dd655Ff0F2
     * @summary Профиль авторизованного пользователя
     * @request GET:/accounts/users/me/profile
     * @secure
     */
    "69Fcaa197A8B8Cf6C6A4B8Dd655Ff0F2": (
      query?: {
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ModelsUsersV1User, void>({
        path: `/accounts/users/me/profile`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает историю просмотров эпизодов авторизованного пользователя
     *
     * @tags Аккаунты.Пользователи.Мое.Просмотры
     * @name 98E2D85Bdf06F190Dde743B204Aacaa0
     * @summary История просмотренных эпизодов
     * @request GET:/accounts/users/me/views/history
     * @secure
     */
    "98E2D85Bdf06F190Dde743B204Aacaa0": (
      query?: {
        /**
         * Номер страницы
         * @example 1
         */
        page?: number;
        /**
         * Ограничение на количество элементов
         * @example 10
         */
        limit?: number;
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponsesV1AccountsUsersMeViewsHistory,
        void | CommonsV1HttpResponses422Content
      >({
        path: `/accounts/users/me/views/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает таймкоды по прогрессу просмотренных эпизодов
     *
     * @tags Аккаунты.Пользователи.Мое.Просмотры
     * @name 8C43236D8913F7775C5C4781Ed2A1Aff
     * @summary Таймкоды просмотренных эпизодов
     * @request GET:/accounts/users/me/views/timecodes
     * @secure
     */
    "8C43236D8913F7775C5C4781Ed2A1Aff": (
      query?: {
        /**
         * Возвращает только таймкоды, которые были добавлены после указанного времени (в iso формате)
         * @format date-time
         * @example "2025-05-12T07:20:50.52Z"
         */
        since?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesV1AccountsUsersMeViewsTimecodes[], void>({
        path: `/accounts/users/me/views/timecodes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Обновляет таймкоды просмотренных эпизодов
     *
     * @tags Аккаунты.Пользователи.Мое.Просмотры
     * @name De259A20Def1Fb0F5237F3F3Ceb477Ea
     * @summary Обновление таймкодов прогресса просмотренного эпизода
     * @request POST:/accounts/users/me/views/timecodes
     * @secure
     */
    de259A20Def1Fb0F5237F3F3Ceb477Ea: (
      data: {
        /** @example 743.5 */
        time: number;
        /** @example true */
        is_watched: boolean;
        /**
         * @format uuid
         * @maxLength 36
         * @example "68d4d5c5-e3d5-419f-a21c-c511b6b251f5"
         */
        release_episode_id: string;
      }[],
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/accounts/users/me/views/timecodes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Удаляет данные по таймкодам просмотров для указанных эпизодов
     *
     * @tags Аккаунты.Пользователи.Мое.Просмотры
     * @name 04D4073F12D50D4998B33Ce7Bbc94D8B
     * @summary Удаление таймкодов просмотра эпизодов
     * @request DELETE:/accounts/users/me/views/timecodes
     * @secure
     */
    "04D4073F12D50D4998B33Ce7Bbc94D8B": (
      data: {
        /**
         * @format uuid
         * @maxLength 36
         * @example "9c5f39e1-56dd-4d44-950a-e1a4201426a4"
         */
        release_episode_id: string;
      }[],
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/accounts/users/me/views/timecodes`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  media = {
    /**
     * @description Возвращает список со всеми доступными для использования VAST кампаниями
     *
     * @tags Реклама.Vasts
     * @name 5Ace32Aaaadd1B77C3D172D6B952A502
     * @summary Список возможных VAST реклам
     * @request GET:/media/vasts
     * @secure
     */
    "5Ace32Aaaadd1B77C3D172D6B952A502": (params: RequestParams = {}) =>
      this.request<ResponsesApiV1AdsVasts, any>({
        path: `/media/vasts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает XML страницу со всеми доступными для использования VAST кампаниями. Можно просто отдавать этот URL в любой VAST плеер, который поддерживает загрузку vast XML по url
     *
     * @tags Реклама.Vasts
     * @name 71B3Eb0Cca9E96D4Fc48D0D77Fa35Eab
     * @summary VAST XML с цепочкой реклам
     * @request GET:/media/manifest.xml
     * @secure
     */
    "71B3Eb0Cca9E96D4Fc48D0D77Fa35Eab": (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/media/manifest.xml`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает список промо-материалов или рекламные кампании в случайном порядке
     *
     * @tags Медиа.Промо
     * @name A9E450153C7Cb6120C51Bb4737C830F8
     * @summary Список промо-материалов
     * @request GET:/media/promotions
     * @secure
     */
    a9E450153C7Cb6120C51Bb4737C830F8: (
      query?: {
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesV1MediaPromotions, any>({
        path: `/media/promotions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список последних видео-роликов
     *
     * @tags Медиа.Видеоконтент
     * @name 13324A2B1D96Abfe1Fbb72686B164Afd
     * @summary Список видео-роликов
     * @request GET:/media/videos
     * @secure
     */
    "13324A2B1D96Abfe1Fbb72686B164Afd": (
      query?: {
        /**
         * Количество роликов в выдаче
         * @example 5
         */
        limit?: number;
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesV1MediaVideos, any>({
        path: `/media/videos`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  anime = {
    /**
     * @description Возвращает список релизов по заданными параметрам
     *
     * @tags Аниме.Каталог
     * @name Deb730A26Ed7580E04C822A12B782831
     * @summary Список релизов в каталоге
     * @request GET:/anime/catalog/releases
     * @secure
     */
    deb730A26Ed7580E04C822A12B782831: (
      query?: {
        /**
         * Номер страницы
         * @example 1
         */
        page?: number;
        /**
         * Ограничение на количество элементов
         * @example 10
         */
        limit?: number;
        /**
         * Список идентификаторов жанров
         * @example "15,20"
         */
        "f[genres]"?: any;
        /**
         * Список типов релизов
         * @example ["TV","WEB"]
         */
        "f[types]"?: EnumsAnimeReleasesReleaseType[];
        /**
         * Список сезонов релизов
         * @example ["winter","autumn"]
         */
        "f[seasons]"?: EnumsAnimeReleasesReleaseSeason[];
        /**
         * Минимальный год выхода релиза
         * @example "2016"
         */
        "f[years][from_year]"?: any;
        /**
         * Максимальный год выхода релиза
         * @example "2020"
         */
        "f[years][to_year]"?: any;
        /**
         * Поиск запрос
         * @example "Мастера меча"
         */
        "f[search]"?: any;
        /**
         * Тип сортировки
         * @example "RATING_DESC"
         */
        "f[sorting]"?: EnumsAnimeCatalogFilterSorting;
        /**
         * Список возрастных рейтингов
         * @example ["R6_PLUS","R12_PLUS"]
         */
        "f[age_ratings]"?: EnumsAnimeReleasesReleaseAgeRating[];
        /**
         * Список статусов релизов
         * @example "IS_ONGOING"
         */
        "f[publish_statuses]"?: EnumsAnimeCatalogFilterPublishStatus[];
        /**
         * Список статусов релизов
         * @example "IS_IN_PRODUCTION"
         */
        "f[production_statuses]"?: EnumsAnimeCatalogFilterProductionStatus[];
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponsesApiV1AnimeCatalogReleases,
        CommonsV1HttpResponses422Content
      >({
        path: `/anime/catalog/releases`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список релизов по заданными параметрам
     *
     * @tags Аниме.Каталог
     * @name 1774E330982Ade57101C5Af1A263B3Ad
     * @summary Список релизов в каталоге
     * @request POST:/anime/catalog/releases
     * @secure
     */
    "1774E330982Ade57101C5Af1A263B3Ad": (
      data: {
        /** @example 1 */
        page?: number;
        /** @example 15 */
        limit?: number;
        f?: {
          /** @example [15,20] */
          genres?: number[];
          /** @example ["TV","WEB"] */
          types?: EnumsAnimeReleasesReleaseType[];
          /** @example ["winter","autumn"] */
          seasons?: EnumsAnimeReleasesReleaseSeason[];
          years?: {
            /** @example 2016 */
            from_year?: number;
            /** @example 2020 */
            to_year?: number;
          };
          /** @example "Мастера меча" */
          search?: string;
          sorting?: EnumsAnimeCatalogFilterSorting;
          /** @example ["R6_PLUS","R12_PLUS"] */
          age_ratings?: EnumsAnimeReleasesReleaseAgeRating[];
          /** @example ["IS_ONGOING"] */
          publish_statuses?: EnumsAnimeCatalogFilterPublishStatus[];
          /** @example ["IS_IN_PRODUCTION"] */
          production_statuses?: EnumsAnimeCatalogFilterProductionStatus[];
        };
        /** @example "id,type.description" */
        include?: string;
        /** @example "season.value,description" */
        exclude?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponsesApiV1AnimeCatalogReleases,
        CommonsV1HttpResponses422Content
      >({
        path: `/anime/catalog/releases`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список возможных возрастных рейтингов в каталоге
     *
     * @tags Аниме.Каталог.Справочники
     * @name 7Ccd6Ec065F6A366883534288E06B946
     * @summary Список возрастных рейтингов в каталоге
     * @request GET:/anime/catalog/references/age-ratings
     * @secure
     */
    "7Ccd6Ec065F6A366883534288E06B946": (params: RequestParams = {}) =>
      this.request<ResponsesApiV1AnimeCatalogReferencesAgeRatings, any>({
        path: `/anime/catalog/references/age-ratings`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список всех жанров в каталоге
     *
     * @tags Аниме.Каталог.Справочники
     * @name 0849587143559Ca91B030Ecce1B78924
     * @summary Список жанров в каталоге
     * @request GET:/anime/catalog/references/genres
     * @secure
     */
    "0849587143559Ca91B030Ecce1B78924": (params: RequestParams = {}) =>
      this.request<ResponsesApiV1AnimeCatalogReferencesGenres, any>({
        path: `/anime/catalog/references/genres`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список возможных статусов озвучки релиза в каталоге
     *
     * @tags Аниме.Каталог.Справочники
     * @name 48840B125443Cfd04E9Def7E82332C74
     * @summary Список возможных статусов озвучки релиза в каталоге
     * @request GET:/anime/catalog/references/production-statuses
     * @secure
     */
    "48840B125443Cfd04E9Def7E82332C74": (params: RequestParams = {}) =>
      this.request<ResponsesApiV1AnimeCatalogReferencesProductionStatuses, any>(
        {
          path: `/anime/catalog/references/production-statuses`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        },
      ),

    /**
     * @description Возвращает список возможных статусов выхода релиза в каталоге
     *
     * @tags Аниме.Каталог.Справочники
     * @name B05B5536B808Dab15831B8Ceb0B07B3E
     * @summary Список возможных статусов выхода релиза в каталоге
     * @request GET:/anime/catalog/references/publish-statuses
     * @secure
     */
    b05B5536B808Dab15831B8Ceb0B07B3E: (params: RequestParams = {}) =>
      this.request<ResponsesApiV1AnimeCatalogReferencesPublishStatuses, any>({
        path: `/anime/catalog/references/publish-statuses`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список возможных сезонов релизов в каталоге
     *
     * @tags Аниме.Каталог.Справочники
     * @name 02C7342E6E3681Bd3E68185Ed969Aef2
     * @summary Список сезонов релиза в каталоге
     * @request GET:/anime/catalog/references/seasons
     * @secure
     */
    "02C7342E6E3681Bd3E68185Ed969Aef2": (params: RequestParams = {}) =>
      this.request<ResponsesV1AnimeCatalogReferencesSeasons, any>({
        path: `/anime/catalog/references/seasons`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список возможных типов сортировок в каталоге
     *
     * @tags Аниме.Каталог.Справочники
     * @name 7D515De59290B809D09C1E61804C7Dfd
     * @summary Список возможных типов сортировок в каталоге
     * @request GET:/anime/catalog/references/sorting
     * @secure
     */
    "7D515De59290B809D09C1E61804C7Dfd": (params: RequestParams = {}) =>
      this.request<ResponsesV1AnimeCatalogReferencesSorting, any>({
        path: `/anime/catalog/references/sorting`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список возможных типов релизов в каталоге
     *
     * @tags Аниме.Каталог.Справочники
     * @name 00815D61Be831012848Cb3F964A73701
     * @summary Список типов релизов в каталоге
     * @request GET:/anime/catalog/references/types
     * @secure
     */
    "00815D61Be831012848Cb3F964A73701": (params: RequestParams = {}) =>
      this.request<ResponsesV1AnimeCatalogReferencesTypes, any>({
        path: `/anime/catalog/references/types`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список годов в каталоге
     *
     * @tags Аниме.Каталог.Справочники
     * @name 107Dd05A40Cd2Fcfb05Ce6F2C9E587B8
     * @summary Список годов в каталоге
     * @request GET:/anime/catalog/references/years
     * @secure
     */
    "107Dd05A40Cd2Fcfb05Ce6F2C9E587B8": (params: RequestParams = {}) =>
      this.request<ResponsesV1AnimeCatalogReferencesYears, any>({
        path: `/anime/catalog/references/years`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список франшиз.
     *
     * @tags Аниме.Франшизы
     * @name 4Bfab3225E23Cca7Cce5C8E932D261Be
     * @summary Получить список франшиз
     * @request GET:/anime/franchises
     * @secure
     */
    "4Bfab3225E23Cca7Cce5C8E932D261Be": (
      query?: {
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesV1AnimeFranchises, any>({
        path: `/anime/franchises`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает данные франшизы
     *
     * @tags Аниме.Франшизы
     * @name 70Ff1847Fe22225D4Cae12Ad31075057
     * @summary Получить франшизу
     * @request GET:/anime/franchises/{franchiseId}
     * @secure
     */
    "70Ff1847Fe22225D4Cae12Ad31075057": (
      franchiseId: string,
      query?: {
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesV1AnimeFranchise, any>({
        path: `/anime/franchises/${franchiseId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список случайных франшиз.
     *
     * @tags Аниме.Франшизы
     * @name 8Cad50Ab682Ef2Cb29271Df2Ba543628
     * @summary Получить список случайных франшиз
     * @request GET:/anime/franchises/random
     * @secure
     */
    "8Cad50Ab682Ef2Cb29271Df2Ba543628": (
      query?: {
        /**
         * Количество случайных франшиз в выдаче
         * @example 4
         */
        limit?: number;
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesV1AnimeFranchisesRandom, any>({
        path: `/anime/franchises/random`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список франшиз, в которых участвует релиз
     *
     * @tags Аниме.Франшизы
     * @name D27Fdeccbad6Ce91C882Fd615561A4Ad
     * @summary Получить список франшиз для релиза
     * @request GET:/anime/franchises/release/{releaseId}
     * @secure
     */
    d27Fdeccbad6Ce91C882Fd615561A4Ad: (
      releaseId: string,
      query?: {
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesV1AnimeFranchisesByRelease, any>({
        path: `/anime/franchises/release/${releaseId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список всех жанров
     *
     * @tags Аниме.Жанры
     * @name C674398F4Cecb9B21A2D7743B16Bd4D5
     * @summary Список всех жанров
     * @request GET:/anime/genres
     * @secure
     */
    c674398F4Cecb9B21A2D7743B16Bd4D5: (
      query?: {
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesApiV1AnimeGenres, any>({
        path: `/anime/genres`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает данные по жанру
     *
     * @tags Аниме.Жанры
     * @name 8276762D056F3Ccc731848B30A89Dc7A
     * @summary Данные по жанру
     * @request GET:/anime/genres/{genreId}
     * @secure
     */
    "8276762D056F3Ccc731848B30A89Dc7A": (
      genreId: any,
      query?: {
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesApiV1AnimeGenresItem, any>({
        path: `/anime/genres/${genreId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список случайных жанров
     *
     * @tags Аниме.Жанры
     * @name 9822B098B63Cec6Ffbd72C091251D9D1
     * @summary Список случайных жанров
     * @request GET:/anime/genres/random
     * @secure
     */
    "9822B098B63Cec6Ffbd72C091251D9D1": (
      query?: {
        /**
         * Количество жанров в выдаче
         * @example 8
         */
        limit?: any;
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesApiV1AnimeGenresList, any>({
        path: `/anime/genres/random`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список всех релизов жанра
     *
     * @tags Аниме.Жанры
     * @name 3E7Da8Fb153756860D8739524F021926
     * @summary Список релизов жанра
     * @request GET:/anime/genres/{genreId}/releases
     * @secure
     */
    "3E7Da8Fb153756860D8739524F021926": (
      genreId: number,
      query?: {
        /**
         * Номер страницы
         * @example 1
         */
        page?: number;
        /**
         * Ограничение на количество элементов
         * @example 10
         */
        limit?: number;
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesApiV1AnimeGenresReleases, any>({
        path: `/anime/genres/${genreId}/releases`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает данные по последним релизам
     *
     * @tags Аниме.Релизы
     * @name Da7Be4D3E8D38A49Fcf71358Df5C0A76
     * @summary Последние релизы
     * @request GET:/anime/releases/latest
     * @secure
     */
    da7Be4D3E8D38A49Fcf71358Df5C0A76: (
      query?: {
        /**
         * Количество последних релизов в выдаче
         * @example 14
         */
        limit?: number;
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponsesApiV1AnimeReleasesLatest,
        CommonsV1HttpResponses422Content
      >({
        path: `/anime/releases/latest`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает данные по случайным релизам
     *
     * @tags Аниме.Релизы
     * @name 9Eb40A19816Cdbb7621Cb40D6C8Eef3B
     * @summary Данные по случайным релизам
     * @request GET:/anime/releases/random
     * @secure
     */
    "9Eb40A19816Cdbb7621Cb40D6C8Eef3B": (
      query?: {
        /**
         * Количество случайных релизов
         * @example 5
         */
        limit?: number;
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesApiV1AnimeReleasesRandom, any>({
        path: `/anime/releases/random`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает данные по рекомендованным релизам
     *
     * @tags Аниме.Релизы
     * @name 990D70067D30Af5Eda130E840Fcef7Ac
     * @summary Данные по рекомендованным релизам
     * @request GET:/anime/releases/recommended
     * @secure
     */
    "990D70067D30Af5Eda130E840Fcef7Ac": (
      query?: {
        /**
         * Количество рекомендованных релизов
         * @example 5
         */
        limit?: number;
        /**
         * Идентификатор релиза, для которого рекомендуем
         * @example 9246
         */
        release_id?: number;
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponsesApiV1AnimeReleasesRecommended,
        CommonsV1HttpResponses422Content
      >({
        path: `/anime/releases/recommended`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает данные по списку релизов
     *
     * @tags Аниме.Релизы
     * @name 6Efff710532E9015D91227Fdb616Faeb
     * @summary Данные по списку релизов
     * @request GET:/anime/releases/list
     * @secure
     */
    "6Efff710532E9015D91227Fdb616Faeb": (
      query?: {
        /**
         * Список ID релизов
         * @example [9951,9433,5692]
         */
        ids?: number[];
        /**
         * Список alias релизов
         * @example ["darling-in-the-franxx"]
         */
        aliases?: string[];
        /**
         * Номер страницы
         * @example 1
         */
        page?: number;
        /**
         * Ограничение на количество элементов
         * @example 10
         */
        limit?: number;
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponsesApiV1AnimeReleasesList,
        CommonsV1HttpResponses422Content
      >({
        path: `/anime/releases/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает данные по релизу
     *
     * @tags Аниме.Релизы
     * @name 1A04F3Ab108F6960Aacb815Ecabe29D2
     * @summary Данные по релизу
     * @request GET:/anime/releases/{idOrAlias}
     * @secure
     */
    "1A04F3Ab108F6960Aacb815Ecabe29D2": (
      idOrAlias: any,
      query?: {
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesApiV1AnimeReleasesRelease, void>({
        path: `/anime/releases/${idOrAlias}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает данные по участникам релиза
     *
     * @tags Аниме.Релизы
     * @name 073E49978330Ed579E84Cc9Deb3Ba3E6
     * @summary Список участников, которые работали над релизом
     * @request GET:/anime/releases/{idOrAlias}/members
     * @secure
     */
    "073E49978330Ed579E84Cc9Deb3Ba3E6": (
      idOrAlias: any,
      query?: {
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesApiV1AnimeReleasesReleaseMembers, void>({
        path: `/anime/releases/${idOrAlias}/members`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает данные по всем существующим таймкодам просмотра эпизодов релиза. Имеет 1-2-x минутный кэш.
     *
     * @tags Аниме.Релизы
     * @name Ca61988F225283Fc8A0Db99F4F4Cfab4
     * @summary Данные по таймкодам просмотра эпизодов релиза
     * @request GET:/anime/releases/{idOrAlias}/episodes/timecodes
     * @secure
     */
    ca61988F225283Fc8A0Db99F4F4Cfab4: (
      idOrAlias: any,
      query?: {
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesApiV1AnimeReleasesReleaseEpisodesTimecodes, void>({
        path: `/anime/releases/${idOrAlias}/episodes/timecodes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает данные по эпизоду
     *
     * @tags Аниме.Релизы.Эпизоды
     * @name D5F0Cbb2Ce401655A7Af10Ca7B50Eb41
     * @summary Данные по эпизоду
     * @request GET:/anime/releases/episodes/{releaseEpisodeId}
     * @secure
     */
    d5F0Cbb2Ce401655A7Af10Ca7B50Eb41: (
      releaseEpisodeId: any,
      query?: {
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesApiV1AnimeReleasesEpisode, void>({
        path: `/anime/releases/episodes/${releaseEpisodeId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает данные по просмотру указанного эпизода авторизованным пользователем. Имеет 1-2-x минутный кэш.
     *
     * @tags Аниме.Релизы.Эпизоды
     * @name 3983Ade6Cbabc60D428294310A365755
     * @summary Данные по просмотру эпизода
     * @request GET:/anime/releases/episodes/{releaseEpisodeId}/timecode
     * @secure
     */
    "3983Ade6Cbabc60D428294310A365755": (
      releaseEpisodeId: any,
      query?: {
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesApiV1AnimeReleasesEpisodeTimecode, void>({
        path: `/anime/releases/episodes/${releaseEpisodeId}/timecode`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список релизов в расписании на текущую дату
     *
     * @tags Аниме.Релизы.РасписаниеРелизов
     * @name 2050390Fd4Fc22B85E05F08F5D9Fdf4C
     * @summary Данные по расписанию релизов на текущую дату
     * @request GET:/anime/schedule/now
     * @secure
     */
    "2050390Fd4Fc22B85E05F08F5D9Fdf4C": (
      query?: {
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesV1AnimeScheduleNow, any>({
        path: `/anime/schedule/now`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список релизов в расписании на текущую неделю
     *
     * @tags Аниме.Релизы.РасписаниеРелизов
     * @name 210Dca9590F9B5Be1Dbef022Cdb2221D
     * @summary Данные по расписанию релизов на текущую неделю
     * @request GET:/anime/schedule/week
     * @secure
     */
    "210Dca9590F9B5Be1Dbef022Cdb2221D": (
      query?: {
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesV1AnimeScheduleWeek, any>({
        path: `/anime/schedule/week`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает данные по последним торрентам
     *
     * @tags Аниме.Торренты
     * @name Fcca810F1Ea3F9Fbd7De393B7A6Ccd1B
     * @summary Данные по торрентам
     * @request GET:/anime/torrents
     * @secure
     */
    fcca810F1Ea3F9Fbd7De393B7A6Ccd1B: (
      query?: {
        /**
         * Номер страницы
         * @example 1
         */
        page?: number;
        /**
         * Ограничение на количество элементов
         * @example 10
         */
        limit?: number;
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponsesApiV1AnimeTorrents,
        CommonsV1HttpResponses422Content
      >({
        path: `/anime/torrents`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает данные по торренту
     *
     * @tags Аниме.Торренты
     * @name A55686F9Bd5Cdcaf372A85F3Ec2Fc65C
     * @summary Данные по торренту
     * @request GET:/anime/torrents/{hashOrId}
     * @secure
     */
    a55686F9Bd5Cdcaf372A85F3Ec2Fc65C: (
      hashOrId: string,
      query?: {
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesApiV1AnimeTorrent, void>({
        path: `/anime/torrents/${hashOrId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает торрент-файл
     *
     * @tags Аниме.Торренты
     * @name 0D2789B05C70D7A360902559C116E4B4
     * @summary Торрент-файл по его hash или id
     * @request GET:/anime/torrents/{hashOrId}/file
     * @secure
     */
    "0D2789B05C70D7A360902559C116E4B4": (
      hashOrId: string,
      query?: {
        /** passkey пользователя. Оставьте пустым для собственного pk (если аутентифицирован) */
        pk?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/anime/torrents/${hashOrId}/file`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает данные по торрентам релиза
     *
     * @tags Аниме.Торренты
     * @name 520Cfcb16987B608D2965D42Df8D3010
     * @summary Данные по торрентам для релиза
     * @request GET:/anime/torrents/release/{releaseId}
     * @secure
     */
    "520Cfcb16987B608D2965D42Df8D3010": (
      releaseId: number,
      query?: {
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesApiV1AnimeTorrentsReleaseTorrents, void>({
        path: `/anime/torrents/release/${releaseId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает данные по последним торрентам в виде XML документа
     *
     * @tags Аниме.Торренты
     * @name 530Df7Fab8C5F401C1827Acf9De7A991
     * @summary RSS лента последних торрентов
     * @request GET:/anime/torrents/rss
     * @secure
     */
    "530Df7Fab8C5F401C1827Acf9De7A991": (
      query?: {
        /** Количество торрентов в выдаче. По умолчанию 10 */
        limit?: number;
        /** Пользовательский passkey. Персонализирует ссылки на торренты для учета статистики */
        pk?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/anime/torrents/rss`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает данные по торрентам релиза в виде RSS ленты
     *
     * @tags Аниме.Торренты
     * @name B0A67Aeaf4Fb4D0E67B47452C1F71161
     * @summary RSS лента торрентов релиза
     * @request GET:/anime/torrents/rss/release/{releaseId}
     * @secure
     */
    b0A67Aeaf4Fb4D0E67B47452C1F71161: (
      releaseId: number,
      query?: {
        /** Пользовательский passkey. Персонализирует ссылки на торренты для учета статистики */
        pk?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/anime/torrents/rss/release/${releaseId}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  app = {
    /**
     * @description Возвращает данные по релизам, которые удовлетворяют поисковому запросу
     *
     * @tags Приложение.Поиск
     * @name Bdc9C56B8C4464F3629Eaccabac8Db20
     * @summary Поиск релизов
     * @request GET:/app/search/releases
     * @secure
     */
    bdc9C56B8C4464F3629Eaccabac8Db20: (
      query: {
        /** Поисковая строка */
        query: string;
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesApiV1AppSearchReleases, any>({
        path: `/app/search/releases`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает информацию о статусе API
     *
     * @tags Приложение.Статус
     * @name 5523C4A4Ef98641Efa267E67891C7762
     * @summary Статус API
     * @request GET:/app/status
     * @secure
     */
    "5523C4A4Ef98641Efa267E67891C7762": (params: RequestParams = {}) =>
      this.request<ResponsesV1AppStatus, any>({
        path: `/app/status`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  teams = {
    /**
     * @description Возвращает список всех команд
     *
     * @tags Команды
     * @name B8116E18F2Ffc250Bda35Faa120Bbe2D
     * @summary Список команд АниЛибрии
     * @request GET:/teams/
     * @secure
     */
    b8116E18F2Ffc250Bda35Faa120Bbe2D: (
      query?: {
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesApiV1Teams, any>({
        path: `/teams/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список всех ролей в командах
     *
     * @tags Команды
     * @name A9C6Af5Eb738Ffb0B0Ffe2827Ab8A66A
     * @summary Список ролей
     * @request GET:/teams/roles
     * @secure
     */
    a9C6Af5Eb738Ffb0B0Ffe2827Ab8A66A: (
      query?: {
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesApiV1TeamsRoles, any>({
        path: `/teams/roles`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список всех анилибрийцов с указанием команды и своих ролей
     *
     * @tags Команды
     * @name 7595De64Ca791916074Cb8C193A21604
     * @summary Список анилибрийцов
     * @request GET:/teams/users
     * @secure
     */
    "7595De64Ca791916074Cb8C193A21604": (
      query?: {
        /**
         * Список включаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку.
         * @example "id,type.genres"
         */
        include?: string | string[];
        /**
         * Список исключаемых полей. Через запятую или множественные параметры. Поддерживается вложенность через точку. Приоритет над include
         * @example "poster,description"
         */
        exclude?: string | string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ResponsesApiV1TeamsUsers, any>({
        path: `/teams/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
