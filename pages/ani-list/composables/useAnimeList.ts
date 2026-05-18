import { useApi } from "@/shared/composables/useApi"
import type {AnimeReleasesResponse} from "~/api-client/Api"

export const useAnimeList = () => {
    const { Anime } = useApi()
    const animeList = ref<AnimeReleasesResponse[]>([])
    const page = ref(1)
    const error = ref(false)

    const fetchAnimeList = async (pageNum: number, limit: number) => {
    const response = await Anime.getList(pageNum, limit)

     console.log('Maybe data in response itself:', response)

    if (response.data.data) {
       
        animeList.value = animeList.value.concat(response.data.data);
    }
}

    return {
        animeList,
        page,
        error,
        fetchAnimeList
    }
}