import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import { Database } from "~/types/database.types";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event);
  const { data, error } = await client.from("project").select("*");
  return data;
});
