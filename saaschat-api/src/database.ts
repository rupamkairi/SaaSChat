import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString =
  "postgres://postgres.shllqbqehviwuafnwnxx:A39iTNQ6p38mmtWO@aws-0-ap-south-1.pooler.supabase.com:5432/saaschat";

const postgresClient = postgres(connectionString);
export const db = drizzle(postgresClient);
