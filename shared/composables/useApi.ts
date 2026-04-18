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
            getList: (pageNum: number, pageLimit: number) => api.anime['deb730A26Ed7580E04C822A12B782831']({page: pageNum, limit: pageLimit}),
            getAnime: (id: number) => api.anime['1A04F3Ab108F6960Aacb815Ecabe29D2'](id),

        }
    }
}