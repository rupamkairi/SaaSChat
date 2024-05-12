import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/schema/*",
  driver: "aws-data-api",
  dialect: "postgresql",
  dbCredentials: {
    host: "aws-0-ap-south-1.pooler.supabase.com",
    port: 5432,
    user: "postgres.shllqbqehviwuafnwnxx",
    password: "A39iTNQ6p38mmtWO",
    database: "postgres",
    connectionString:
      "postgres://postgres.shllqbqehviwuafnwnxx:A39iTNQ6p38mmtWO@aws-0-ap-south-1.pooler.supabase.com:5432/postgres",
  },
  verbose: true,
  strict: true,
});
