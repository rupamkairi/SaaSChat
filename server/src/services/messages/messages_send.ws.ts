import { MessageData } from "@src/controllers/ws/validate-message";
import { db } from "@src/database";
import { messages } from "@src/schema";

export async function saveMessage(data: MessageData) {
  const [_m] = await db
    .insert(messages)
    .values({
      chat_id: +data?.chat_id!,
      user_id: +data?.user_id!,
      text: data?.content,
    })
    .returning();
  return { ..._m, content: _m.text };
}
