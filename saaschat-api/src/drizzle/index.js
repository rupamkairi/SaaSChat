import { drizzle } from "drizzle-orm/postgres-js";
// import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as schema from "./schema/index.js";

let { DATABASE_URL, PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } =
  process.env;
// console.log({
//   DATABASE_URL,
//   PGHOST,
//   PGDATABASE,
//   PGUSER,
//   PGPASSWORD,
//   ENDPOINT_ID,
// });
// const migrationClient = postgres(DATABASE_URL, { max: 1 });
// migrate(drizzle(migrationClient), { migrationsFolder: "" });

// for query purposes
const sql = postgres(DATABASE_URL);
export const db = drizzle(sql, { schema });

export async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result);
}

/**
import { neon } from '@neondatabase/serverless'; // HTTP
const sql = neon(DATABASE_URL);
const sql = neon(DATABASE_URL_POOLED);

import { Pool } from '@neondatabase/serverless'; // WebSocket
const pool = new Pool({connectionString: DATABASE_URL });
const pool = new Pool({connectionString: DATABASE_URL_POOLED });
 */
