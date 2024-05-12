import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const messages = pgTable(
  "messages",
  {
    id: uuid("id").primaryKey(),
    sender_id: uuid("sender_id"),
    receiver_id: uuid("receiver_id"),
    content: text("content"),
    created_at: timestamp("created_at"),
    updated_at: timestamp("updated_at"),
  },
  (messages) => {
    return {};
  }
);
