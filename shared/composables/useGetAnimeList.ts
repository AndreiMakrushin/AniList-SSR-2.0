import type { TAnime, IAnimeCard, ApiResponse } from "~/shared/types";

export const useGetAnimeList = async (page: number, limit: number): Promise<IAnimeCard[]> => {
  const config = useRuntimeConfig();

  const api = config.public.ANILIBRIA_API
  const aniList = config.public.ANIME_LIST
  
    const response = await $fetch<ApiResponse>(`${api}${aniList}`, {
      params: { page, limit },
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      },
      async onRequest({ request, options }) {
        if (process.server) {
          options.headers = {
            ...options.headers,
          }
        }
      }
    });

    return response.data?.map((item: TAnime): IAnimeCard => ({
      id: item.id,
      code: item.code || '',
      name: item.name || '',
      poster: `${api}${item.poster?.preview}` || '',
      description: item.description ?? '',
      season: item.season ?? '',
      year: item.year ?? 0
    })) ?? [];

  }
