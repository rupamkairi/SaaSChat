import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const chats = pgTable("chats", {
  id: serial("id").primaryKey(),
  created_at: timestamp("created_at", { mode: "date" }).defaultNow(),

  name: text("name"),
});
