import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { chats, users } from "./index";

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),

  text: text("text"),

  chat_id: integer("chat_id").references(() => chats.id),
  sender: integer("user_id").references(() => users.id),
});
