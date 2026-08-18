import { useAnimeApi } from "@/pages/anime/composables/anime-api/useAnimeApi"

export const useAnimeState = () => {
    const { fetchAnimeById } = useAnimeApi()
    const anime = ref<any>(null)

    const getAnime = async (id: number) => {
        const animeData = await fetchAnimeById(id)
        anime.value = animeData
    }

    return {
        anime,
        getAnime
    }
}