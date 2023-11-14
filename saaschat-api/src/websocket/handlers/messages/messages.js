// import {
//   createMessage,
//   findMessages,
//   findMessagesBetween,
// } from "../../../database/models/messages.js";

export async function messagesSend(data) {
  try {
    // const message = await createMessage({
    //   ...data,
    // });
    const message = [];
    return message;
  } catch (error) {
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
    // console.log(data);
    // const messages = await findMessagesBetween({
    //   ...data,
    // });
    const messages = [];
    return messages;
  } catch (error) {
    throw error;
  }
}
