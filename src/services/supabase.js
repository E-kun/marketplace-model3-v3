import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ltchksktiwiukdxkgrmv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0Y2hrc2t0aXdpdWtkeGtncm12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzNDk3MzQsImV4cCI6MjAxNjkyNTczNH0.k-BMpwliIwTV1opBYuyY9AJqKVrt1bshKuFMcUf582Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
