import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const auth = pgTable("auth", {
  id: serial("id").primaryKey(),

  password: text("password"),
  username: text("username"),
});
