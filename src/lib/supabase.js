import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zunhmugudjmxocpdayut.supabase.co'
const supabaseKey = 'sb_publishable_bQMuOILjhbfT3sDq63jq6A_dpBm6zOf'

export const supabase = createClient(supabaseUrl, supabaseKey)