// src/routes/+layout.ts
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'
import {prisma} from '$lib'
import type { LayoutLoad, LayoutLoadEvent } from './$types'
export const load: LayoutLoad = async ({ fetch, data, depends }: LayoutLoadEvent) => {
  const { customer,tempFirstName } = data;
  depends('supabase:auth')

  const supabase = createSupabaseLoadClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event: { fetch },
    serverSession: data.session,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  
  
  return { supabase, session, customer, tempFirstName }
}