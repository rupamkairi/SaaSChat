import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/schema/*",
  dialect: "postgresql",
  driver: "aws-data-api",
  dbCredentials: {
    host: "aws-0-ap-south-1.pooler.supabase.com",
    port: 5432,
    user: "postgres.shllqbqehviwuafnwnxx",
    password: "A39iTNQ6p38mmtWO",
    database: "saaschat",
    connectionString:
      "postgres://postgres.shllqbqehviwuafnwnxx:A39iTNQ6p38mmtWO@aws-0-ap-south-1.pooler.supabase.com:5432/saaschat",
  },
  verbose: true,
  strict: true,
});
