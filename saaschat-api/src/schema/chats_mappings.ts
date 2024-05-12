import { integer, pgTable, serial } from "drizzle-orm/pg-core";
import { chats, users, guests, teams } from "./index";

export const chats_map = pgTable("chats_map", {
  id: serial("id").primaryKey(),

  chat_id: integer("chat_id").references(() => chats.id),
  team_id: integer("team_id").references(() => teams.id),
  user_id: integer("user_id").references(() => users.id),
  guest_id: integer("guest_id").references(() => guests.id),
});
