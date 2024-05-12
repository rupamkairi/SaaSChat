import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const chats = pgTable("chats", {
  id: serial("id").primaryKey(),

  name: text("name"),
});
