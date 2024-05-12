// import {
//   createMessage,
//   findMessages,
//   findMessagesBetween,
// } from "../../../database/models/messages.js";
import { v4 } from "uuid";
import { db } from "../../../drizzle/index.js";
import { messages } from "../../../drizzle/schema/index.js";
import { and, eq, or } from "drizzle-orm";

export async function messagesSend(data) {
  try {
    // const message = await createMessage({
    //   ...data,
    // });
    // console.log({ data });
    const randomV4 = v4();
    const _messages = await db
      .insert(messages)
      .values({
        id: randomV4,
        ...data,
        created_at: new Date(),
      })
      .returning();
    // console.log(_messages);
    const _message = _messages[0];
    return _message;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function messagesGetAll() {
  try {
    // const messages = await findMessages();
    const messages = [];
    return messages;
  } catch (error) {
    throw error;
  }
}

export async function messagesGetBetween(data) {
  try {
    // console.log({ data });
    const { sender_id, receiver_id } = data;
    const parties = [sender_id, receiver_id];
    console.log(parties);
    const _messages = await db
      .select()
      .from(messages)
      .where(
        or(
          and(
            eq(messages.sender_id, parties[0]),
            eq(messages.receiver_id, parties[1])
          ),
          and(
            eq(messages.sender_id, parties[1]),
            eq(messages.receiver_id, parties[0])
          )
        )
      );
    // console.log(_messages);
    return _messages;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
