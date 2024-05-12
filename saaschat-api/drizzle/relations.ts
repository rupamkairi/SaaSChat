import { relations } from "drizzle-orm/relations";
import { teams, chats, messages, users, auth, chats_map } from "./schema";

export const chatsRelations = relations(chats, ({one, many}) => ({
	team: one(teams, {
		fields: [chats.team_id],
		references: [teams.id]
	}),
	messages: many(messages),
	chats_maps: many(chats_map),
}));

export const teamsRelations = relations(teams, ({many}) => ({
	chats: many(chats),
	users: many(users),
}));

export const messagesRelations = relations(messages, ({one}) => ({
	chat: one(chats, {
		fields: [messages.chat_id],
		references: [chats.id]
	}),
	user: one(users, {
		fields: [messages.user_id],
		references: [users.id]
	}),
}));

export const usersRelations = relations(users, ({one, many}) => ({
	messages: many(messages),
	auth: one(auth, {
		fields: [users.auth_id],
		references: [auth.id]
	}),
	team: one(teams, {
		fields: [users.team_id],
		references: [teams.id]
	}),
	chats_maps: many(chats_map),
}));

export const authRelations = relations(auth, ({many}) => ({
	users: many(users),
}));

export const chats_mapRelations = relations(chats_map, ({one}) => ({
	chat: one(chats, {
		fields: [chats_map.chat_id],
		references: [chats.id]
	}),
	user: one(users, {
		fields: [chats_map.user_id],
		references: [users.id]
	}),
}));