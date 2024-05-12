import { and, eq } from "drizzle-orm";
import { db } from "../../database";
import { messages } from "../../schema";
import { FindMessageDTO } from "./messages.dto";

export async function findMessages(p: FindMessageDTO) {
  const m = await db
    .select()
    .from(messages)
    .where(and(eq(messages.chat_id, p.chat_id)));

  return m;
}
