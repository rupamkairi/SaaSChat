import { pgTable, pgEnum, serial, text, foreignKey } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const aal_level = pgEnum("aal_level", ['aal1', 'aal2', 'aal3'])
export const code_challenge_method = pgEnum("code_challenge_method", ['s256', 'plain'])
export const factor_status = pgEnum("factor_status", ['unverified', 'verified'])
export const factor_type = pgEnum("factor_type", ['totp', 'webauthn'])
export const one_time_token_type = pgEnum("one_time_token_type", ['confirmation_token', 'reauthentication_token', 'recovery_token', 'email_change_token_new', 'email_change_token_current', 'phone_change_token'])
export const key_status = pgEnum("key_status", ['default', 'valid', 'invalid', 'expired'])
export const key_type = pgEnum("key_type", ['aead-ietf', 'aead-det', 'hmacsha512', 'hmacsha256', 'auth', 'shorthash', 'generichash', 'kdf', 'secretbox', 'secretstream', 'stream_xchacha20'])


export const auth = pgTable("auth", {
	id: serial("id").primaryKey().notNull(),
	password: text("password"),
	username: text("username"),
});

export const teams = pgTable("teams", {
	id: serial("id").primaryKey().notNull(),
	name: text("name"),
});

export const chats = pgTable("chats", {
	id: serial("id").primaryKey().notNull(),
	name: text("name"),
});

export const guests = pgTable("guests", {
	id: serial("id").primaryKey().notNull(),
	name: text("name"),
	email: text("email"),
	team_id: serial("team_id").notNull().references(() => teams.id),
});

export const users = pgTable("users", {
	id: serial("id").primaryKey().notNull(),
	auth_id: serial("auth_id").notNull().references(() => auth.id),
	team_id: serial("team_id").notNull().references(() => teams.id),
	name: text("name"),
	email: text("email"),
});

export const chats_map = pgTable("chats_map", {
	id: serial("id").primaryKey().notNull(),
	chat_id: serial("chat_id").notNull().references(() => chats.id),
	team_id: serial("team_id").notNull().references(() => teams.id),
	user_id: serial("user_id").notNull().references(() => users.id),
	guest_id: serial("guest_id").notNull().references(() => guests.id),
});