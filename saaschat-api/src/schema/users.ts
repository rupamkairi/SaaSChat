import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { auth, teams } from "./index";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),

  name: text("name"),
  email: text("email"),

  auth_id: integer("auth_id").references(() => auth.id),
  team_id: integer("team_id").references(() => teams.id),
});
