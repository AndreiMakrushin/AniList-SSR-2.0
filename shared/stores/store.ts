// ~/shared/stores/animeStore.ts
import type { UserDto } from "~/api-client/Api";
import { defineStore } from "pinia"

export const useAnimeStore = defineStore('anime', () => {
    const user = ref<UserDto | null>(null)

    return {
        user
    }
})