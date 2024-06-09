import { pgTable, foreignKey, pgEnum, serial, timestamp, text, integer, boolean } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const aal_level = pgEnum("aal_level", ['aal1', 'aal2', 'aal3'])
export const code_challenge_method = pgEnum("code_challenge_method", ['s256', 'plain'])
export const factor_status = pgEnum("factor_status", ['unverified', 'verified'])
export const factor_type = pgEnum("factor_type", ['totp', 'webauthn'])
export const one_time_token_type = pgEnum("one_time_token_type", ['confirmation_token', 'reauthentication_token', 'recovery_token', 'email_change_token_new', 'email_change_token_current', 'phone_change_token'])
export const key_status = pgEnum("key_status", ['default', 'valid', 'invalid', 'expired'])
export const key_type = pgEnum("key_type", ['aead-ietf', 'aead-det', 'hmacsha512', 'hmacsha256', 'auth', 'shorthash', 'generichash', 'kdf', 'secretbox', 'secretstream', 'stream_xchacha20'])


export const chats = pgTable("chats", {
	id: serial("id").primaryKey().notNull(),
	created_at: timestamp("created_at", { mode: 'string' }).defaultNow(),
	name: text("name"),
	team_id: integer("team_id").references(() => teams.id),
});

export const messages = pgTable("messages", {
	id: serial("id").primaryKey().notNull(),
	created_at: timestamp("created_at", { mode: 'string' }).defaultNow(),
	text: text("text"),
	chat_id: integer("chat_id").references(() => chats.id),
	user_id: integer("user_id").references(() => users.id),
});

export const teams = pgTable("teams", {
	id: serial("id").primaryKey().notNull(),
	name: text("name"),
});

export const users = pgTable("users", {
	id: serial("id").primaryKey().notNull(),
	created_at: timestamp("created_at", { mode: 'string' }).defaultNow(),
	name: text("name"),
	email: text("email"),
	is_guest: boolean("is_guest").default(true),
	auth_id: integer("auth_id").references(() => auth.id),
	team_id: integer("team_id").references(() => teams.id),
});

export const chats_map = pgTable("chats_map", {
	id: serial("id").primaryKey().notNull(),
	chat_id: integer("chat_id").references(() => chats.id),
	user_id: integer("user_id").references(() => users.id),
});

export const auth = pgTable("auth", {
	id: serial("id").primaryKey().notNull(),
	password: text("password"),
	username: text("username"),
});