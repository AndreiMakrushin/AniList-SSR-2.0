import { useSignInApi } from "./signIn-api/useSignInApi"
import { useStorage } from "@vueuse/core"
import type { UserLoginDto } from "~/api-client/Api"


export const useSignState = () => {
    const { fetchSignIn } = useSignInApi()
    const localStorage = useStorage<string | null>('access_token', null)
    const isLoading = ref(false)
    const error = ref<string | null>(null)

    const signIn = async (data: UserLoginDto) => {
        isLoading.value = true
        error.value = null
        const response = await fetchSignIn(data)

        if (response.error) {
            error.value = response.error
            isLoading.value = false
            return false
        }
        if (response.data) {
            localStorage.value = response.data.access_token
            isLoading.value = false
            return true
        }

        isLoading.value = false
        return false

    }

    return { signIn, isLoading: readonly(isLoading), error: readonly(error) }
}