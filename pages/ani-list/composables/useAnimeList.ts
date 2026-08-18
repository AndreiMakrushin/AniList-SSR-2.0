import { useApi } from "@/shared/composables/useApi"
import type {Anime} from "~/api-client/Api"

export const useAnimeList = () => {
    const { Anime } = useApi()
    const animeList = ref<Anime[]>([])
    const page = ref(1)
    const error = ref(false)

    const fetchAnimeList = async (pageNum: number, limit: number) => {
    const response = await Anime.getList(pageNum, limit)

    if (response.data) {
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