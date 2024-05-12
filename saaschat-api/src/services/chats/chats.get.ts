import { and, eq, isNotNull } from "drizzle-orm";
import { db } from "../../database";
import { chats, chats_map } from "../../schema";
import { FindChatsDTO } from "./index";

export async function findChats(p: FindChatsDTO) {
  const c = await db
    .select()
    .from(chats)
    .leftJoin(chats_map, and(eq(chats_map.chat_id, chats.id)));
  return c;
}

export async function findChatsByUser(p: FindChatsDTO) {
  const c = await db
    .select()
    .from(chats)
    .leftJoin(chats_map, and(eq(chats_map.user_id, p.user_id)));
}

export async function findChatsByTeam(p: FindChatsDTO) {
  const c = await db
    .select()
    .from(chats)
    .leftJoin(
      chats_map,
      and(
        isNotNull(chats_map.team_id),
        eq(chats_map.team_id, p.team_id),
        eq(chats_map.chat_id, chats.id)
      )
    );
  return c;
}
