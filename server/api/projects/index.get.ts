import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const user = serverSupabaseUser(event);
  const client = await serverSupabaseClient(event);
  return {
    message: "Get all projects",
  };
});
