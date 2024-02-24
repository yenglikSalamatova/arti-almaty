import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pttupsztvmgtnvdshluf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0dHVwc3p0dm1ndG52ZHNobHVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3OTkyNzYsImV4cCI6MjAyNDM3NTI3Nn0.8oQ1SUAxRovnLsKDdYphvdyIl9nNqhe3g2Py7au9_wk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
