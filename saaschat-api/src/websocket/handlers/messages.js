import {
  createMessage,
  findMessages,
  findMessagesBetween,
} from "../../database/models/messages.js";

export async function messagesSend(data) {
  const message = await createMessage({
    ...data,
  });
  return message;
}

export async function messagesGetAll() {
  const messages = await findMessages();
  return messages;
}

export async function messageGetBetween(data) {
  try {
    // console.log(data);
    const messages = await findMessagesBetween({
      ...data,
    });
    return messages;
  } catch (error) {
    throw error;
  }
}
