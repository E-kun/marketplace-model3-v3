import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://koiwsunccvyyhnmdbyaq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvaXdzdW5jY3Z5eWhubWRieWFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4MTc5NTQsImV4cCI6MjA1MzM5Mzk1NH0.WlMVr9XgpFDplyCd4viOzzkhN7JmnN6_R2IVtJYpAus";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
