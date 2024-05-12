import { and, eq } from "drizzle-orm";
import { db } from "../../database";
import { messages } from "../../schema";
import { CreateMessageDTO } from "./index";

// this is db model does not send or broadcast messages
export async function createMessage(p: CreateMessageDTO) {
  const _message = p;
  let m;
  await db.transaction(async (tx) => {
    m = db.insert(messages).values(_message).returning();
  });
  return m;
}

export const exampleCreateMessage = () =>
  createMessage({
    user_id: 0,
    chat_id: 1,
    text: "Hello, World!",
  });
