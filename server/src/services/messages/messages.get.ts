import { and, eq } from "drizzle-orm";
import { db } from "../../database";
import { messages } from "../../schema";
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
