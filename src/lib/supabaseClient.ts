import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://rhwqiwxpwkyylpjwqnpx.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_VxhvDDZpkvvVjGR7YL6YYA_lnDbZc5O";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);