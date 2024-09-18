import {db} from "../../database";
import {messages} from "../../schema";
import {CreateMessageDTO} from "./index";


export async function createMessage(p: CreateMessageDTO) {
  const _message = p;
  let m;
  await db.transaction(async (tx) => {
    m = db.insert(messages).values(_message).returning();
  });
  return m;
}

