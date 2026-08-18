import { useApi } from "@/shared/composables/useApi"
import type { UserLoginDto } from "~/api-client/Api"

export const useSignInApi = () => {
    const { Auth } = useApi()

    const fetchSignIn = async (data: UserLoginDto) => {
        try {
            const response = await Auth.login(data)
            return { data: response.data, error: null }
        } catch (error) {
            console.error('Ошибка при получении токена:', error)
            return {
                data: null,
                error: error instanceof Error ? error.message : 'Неизвестная ошибка'
            }
        }
    }
    return { fetchSignIn }
}