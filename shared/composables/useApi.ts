import { Api } from '../../api-client/Api'

export const useApi = () => {
    const config = useRuntimeConfig()
    const baseUrl = config.public.ANILIBRIA_API as string
    const api = new Api({
        baseUrl: baseUrl,
    })

    return {
        api,
        Anime: {
            getList: (pageNum: number, pageLimit: number) => api.anime.animeControllerGetReleases({page: pageNum, limit: pageLimit}),
            getAnime: (enName: string) => api.anime.animeControllerSearch({q: enName}),

        }
    }
}