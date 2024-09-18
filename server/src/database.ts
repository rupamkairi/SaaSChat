import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { config } from "./config";

const connectionString = config.database_url;

const postgresClient = postgres(connectionString);
export const db = drizzle(postgresClient);
