import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { chats, users } from "./index";

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  created_at: timestamp("created_at", { mode: "date" }).defaultNow(),

  text: text("text"),

  chat_id: integer("chat_id").references(() => chats.id),
  user_id: integer("user_id").references(() => users.id),
});
