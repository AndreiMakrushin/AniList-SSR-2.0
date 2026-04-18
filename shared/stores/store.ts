// ~/shared/stores/animeStore.ts
import type { IUser } from "~/shared/types"
import { defineStore } from "pinia"

export const useAnimeStore = defineStore('anime', () => {
    const user = ref<IUser | null>(null)

    return {
        user
    }
})