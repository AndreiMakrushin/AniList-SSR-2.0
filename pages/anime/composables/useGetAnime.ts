import { useApi } from "@/shared/composables/useApi"
import type { ResponsesApiV1AnimeReleasesRelease } from "~/api-client/Api"

export const useGetAnime = () => {
    const { Anime } = useApi()
    const anime = ref<ResponsesApiV1AnimeReleasesRelease>()
    const getAnime = async (id: number) => {
        const response = await Anime.getAnime(id)
        anime.value = response.data
    }

    return {
        anime,
        getAnime
    }
}