import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { teams } from "./index";

export const guests = pgTable("guests", {
  id: serial("id").primaryKey(),

  name: text("name"),
  email: text("email"),

  team_id: integer("team_id").references(() => teams.id),
});
