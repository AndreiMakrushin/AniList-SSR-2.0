import type { SupabaseClient } from '@supabase/supabase-js'
export const useLogout = async () => {
    const { $supabase } = useNuxtApp()
  const supabase = $supabase as SupabaseClient
    const { error } = await supabase.auth.signOut()
    return { error }
}