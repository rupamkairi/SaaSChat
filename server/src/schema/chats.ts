import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { teams } from "./teams";

export const chats = pgTable("chats", {
  id: serial("id").primaryKey(),
  created_at: timestamp("created_at", { mode: "date" }).defaultNow(),

  name: text("name"),

  team_id: integer("team_id").references(() => teams.id),
});
