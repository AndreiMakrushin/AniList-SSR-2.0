import { Api } from '../../api-client/Api'
import type { UserLoginDto, UserCreateDto } from '../../api-client/Api'

export const useApi = () => {
    const config = useRuntimeConfig()
    const baseUrl = config.public.ANILIBRIA_API as string
    const api = new Api({
        baseUrl: baseUrl,
    })

    return {
        api,
        Anime: {
            getList: (pageNum: number, pageLimit: number) => api.anime.animeControllerGetReleases({ page: pageNum, limit: pageLimit }),
            getAnimeByName: (animeName: string) => api.anime.animeControllerSearchByName({ animeName }),
            getAnimeById: (id: number) => api.anime.animeControllerSearchById({ id })
        },
        Auth: {
            login: (data: UserLoginDto) => api.auth.authControllerLogin(data),
            register: (data: UserCreateDto) => api.auth.authControllerRegister(data)
        },
        User:{
            getUser: (id: number) => api.user.userControllerFindUser({ id })
        }
    }
}