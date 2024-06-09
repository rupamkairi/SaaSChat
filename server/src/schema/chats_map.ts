import { integer, pgTable, serial } from "drizzle-orm/pg-core";
import { chats, teams, users } from "./index";

export const chats_map = pgTable("chats_map", {
  id: serial("id").primaryKey(),

  chat_id: integer("chat_id").references(() => chats.id),
  user_id: integer("user_id").references(() => users.id),
});
