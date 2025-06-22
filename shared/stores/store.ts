// ~/shared/stores/animeStore.ts
import type { IUser, IAnimeCard } from "~/shared/types"
import { defineStore } from "pinia"

export const useAnimeStore = defineStore('anime', () => {
    const user = ref<IUser | null>(null)
    const animeList = ref<IAnimeCard[]>([])
    const page = ref(1)

    const fetchAnimeList = async (pageNum: number, limit: number) => {
        const rawData = await useGetAnimeList(pageNum, limit)
        const result = JSON.parse(JSON.stringify(rawData))
        animeList.value.push(...result)
        return result
    }

    return {
        user,
        animeList,
        page,
        fetchAnimeList
    }
})