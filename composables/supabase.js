import { createClient } from "@supabase/supabase-js/dist/main/index.js";
const { supabaseUrl, supabasePublicKey } = useRuntimeConfig();
export const supabase = createClient(supabaseUrl, supabasePublicKey);
