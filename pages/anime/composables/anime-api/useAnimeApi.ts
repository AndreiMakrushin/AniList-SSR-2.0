import { useApi } from "@/shared/composables/useApi"
import type { AnimeResponse } from "~/api-client/Api"

export const useAnimeApi = () => {
    const { Anime } = useApi()

    const fetchAnimeById = async (id: number): Promise<AnimeResponse | null> => {
        try {
            const response = await Anime.getAnimeById(id)
            return response.data
        } catch (error) {
            console.error('Ошибка при получении аниме:', error)
        }
        return null
    }
    return { fetchAnimeById }
}