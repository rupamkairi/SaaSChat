import { and, desc, eq } from "drizzle-orm";
import { db } from "../../database";
import { messages, users } from "../../schema";
import { FindMessagesDTO } from "./index";

export async function findMessages(p: FindMessagesDTO) {
  const m = await db
    .select()
    .from(messages)
    .where(and(eq(messages.chat_id, p.chat_id)))
    .limit(10)
    .orderBy(messages.created_at);
  return m;
}

export async function findMessageByChat(p: FindMessagesDTO) {
  let m = await db
    .select({
      ...messages,
      user__name: users.name,
    })
    .from(messages)
    .where(and(eq(messages.chat_id, p.chat_id)))
    .leftJoin(users, eq(messages.user_id, users.id))
    .orderBy(desc(messages.created_at));

  return { messages: m };
}
