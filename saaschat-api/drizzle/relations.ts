import { relations } from "drizzle-orm/relations";
import { teams, guests, auth, users, chats, chats_map } from "./schema";

export const guestsRelations = relations(guests, ({one, many}) => ({
	team: one(teams, {
		fields: [guests.team_id],
		references: [teams.id]
	}),
	chats_maps: many(chats_map),
}));

export const teamsRelations = relations(teams, ({many}) => ({
	guests: many(guests),
	users: many(users),
	chats_maps: many(chats_map),
}));

export const usersRelations = relations(users, ({one, many}) => ({
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
	guest: one(guests, {
		fields: [chats_map.guest_id],
		references: [guests.id]
	}),
	team: one(teams, {
		fields: [chats_map.team_id],
		references: [teams.id]
	}),
	user: one(users, {
		fields: [chats_map.user_id],
		references: [users.id]
	}),
}));

export const chatsRelations = relations(chats, ({many}) => ({
	chats_maps: many(chats_map),
}));