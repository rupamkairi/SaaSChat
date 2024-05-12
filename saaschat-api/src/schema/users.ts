import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { auth, teams } from "./index";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  created_at: timestamp("created_at", { mode: "date" }).defaultNow(),

  name: text("name"),
  email: text("email"),

  is_guest: boolean("is_guest").default(true),

  auth_id: integer("auth_id").references(() => auth.id),
  team_id: integer("team_id").references(() => teams.id),
});
