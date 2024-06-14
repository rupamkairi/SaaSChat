import { ColumnAliasProxyHandler, and, eq, isNotNull } from "drizzle-orm";
import { db } from "@src/database";
import { chats, chats_map, users } from "@src/schema";
import { FindChatDTO, FindChatsDTO } from "./index";

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
    .leftJoin(chats_map, and(eq(chats_map.user_id, p.user_id!)));
}

export async function findChatsByTeam(p: FindChatsDTO) {
  const c = await db.select().from(chats).where(eq(chats.team_id, p.team_id));
  return { chats: c };
}

export async function findChatByIdForTeam(p: FindChatDTO) {
  let _c = await db
    .select({
      chats,
      users: { ...users, ...chats_map },
    })
    .from(chats)
    .where(and(eq(chats.id, p.chat_id), eq(chats.team_id, p.team_id!)))
    .leftJoin(chats_map, and(eq(chats_map.chat_id, chats.id)))
    .leftJoin(users, and(eq(chats_map.user_id, users.id)));

  const c = _c.reduce(
    (acc, curr) => {
      acc = { ...acc, ...curr.chats };
      const fi = acc.users.findIndex(({ id }) => id === curr.users?.user_id);
      if (fi === -1) acc.users.push(curr.users);
      return acc;
    },
    { users: [] }
  );

  return { chat: c };
}
