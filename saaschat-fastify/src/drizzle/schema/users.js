import {
  pgTable,
  uuid,
  text,
  varchar,
  uniqueIndex,
  timestamp,
} from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: uuid("id").primaryKey(),
    username: varchar("username", { length: 256 }),
    email: text("email"),
    password: text("password"),
    created_at: timestamp("created_at"),
    updated_at: timestamp("updated_at"),
  },
  (users) => {
    return {
      usernameIndex: uniqueIndex("username_unique_idx").on(users.username),
    };
  }
);
