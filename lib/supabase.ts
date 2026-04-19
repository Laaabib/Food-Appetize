import { createClient } from '@supabase/supabase-js';

let supabaseClient: ReturnType<typeof createClient> | null = null;

// Fallback values injected explicitly to avoid Next.js client-side env serialization issues
const FALLBACK_URL = "https://efjwrtusalptxgjsaval.supabase.co";
const FALLBACK_KEY = "sb_publishable_iCA82ofVQc5fiqd-gOHyPw_1MyOxIbO";

export const getSupabase = () => {
  const envUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const envKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  const url = envUrl ? envUrl.replace(/["']/g, "").trim() : FALLBACK_URL;
  const key = envKey ? envKey.replace(/["']/g, "").trim() : FALLBACK_KEY;

  if (!url || !key || url === 'undefined' || url === 'null') {
    return null;
  }
  
  if (!supabaseClient) {
    try {
        // Ensure protocol exists
        const formattedUrl = url.startsWith('http') ? url : `https://${url}`;
        supabaseClient = createClient(formattedUrl, key);
    } catch (err) {
        console.error("Supabase init error:", err);
        return null;
    }
  }
  
  return supabaseClient;
};
