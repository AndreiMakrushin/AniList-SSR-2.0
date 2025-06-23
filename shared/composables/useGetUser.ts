import { useAnimeStore } from "@/shared/stores/store";
import { useGetUserSession } from "./useGetUserSession";


export const useGetUser = async () => {
    const store = useAnimeStore()
    const { data, error } = await useGetUserSession()
    
    store.user = error ? null : data
    return store.user
  }