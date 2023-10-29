import { v4 } from "uuid";
import uuidBuffer from "uuid-buffer";
import { client } from "../cassandra.js";
import qb, { qbr } from "../querybuilder.js";

export async function createMessage({
  content = "",
  receiver_id = null,
  sender_id = null,
}) {
  try {
    let message = {
      id: v4(),
      content,
      receiver_id,
      sender_id,
      created_at: new Date(),
    };

    let result = await qbr(qb.insert(message).into("messages"));
    return result;
  } catch (error) {
    console.log("createMessage", error);
    throw error;
    client.shutdown();
  }
}

export async function findMessages() {
  try {
    let result = await qbr(qb.select("*").from("messages"));
    return result;
  } catch (error) {
    console.log("findMessages", error);
    throw error;
    client.shutdown();
  }
}

export async function findMessagesById(id) {
  try {
    let result = await qbr(
      qb.select("*").from("messages").where("id", "=", id)
    );
    return result;
  } catch (error) {
    console.log("findMessageById", error);
    throw error;
    client.shutdown();
  }
}

export async function findMessagesByReceiverId(id) {
  try {
    let result = await qbr(
      qb.select("*").from("messages").where("receiver_id", "=", id)
    );
    return result;
  } catch (error) {
    console.log("findMessageByReceiverId", error);
    throw error;
    client.shutdown();
  }
}

export async function findMessagesBySenderId(id) {
  try {
    let result = await qbr(
      qb.select("*").from("messages").where("sender_id", "=", id)
    );
    return result;
  } catch (error) {
    console.log("findMessageBySenderId", error);
    throw error;
    client.shutdown();
  }
}

export async function findMessagesBetween({ receiver_id, sender_id }) {
  try {
    // const messagesGet = await messagesModel.find(
    //   {
    //     messages_receiver_id: uuidBuffer.toBuffer(receiver_id),
    //     messages_sender_id: uuidBuffer.toBuffer(sender_id),
    //   },
    //   // { id: uuidBuffer.toBuffer("076f36aa-8240-4db8-8821-ea4536640196") },
    //   { fields: ["content"] }
    // );
    // console.log(messagesGet);

    let result = await qbr(
      qb.select("*").from("messages").where({ receiver_id, sender_id }),
      { filtering: true }
    );
    return result;
  } catch (error) {
    console.log("findMessagesBetween", error);
    throw error;
    client.shutdown();
  }
}

// let result = await qbr(
//   qb
//     .select("*")
//     .from("messages")
//     .where((builder) =>
//       builder.where({
//         receiver_id: qb.raw("196c12ab-5cd9-4c50-a830-45d139763fcb"),
//         sender_id: qb.raw("e65a6d16-69a5-11ee-8c99-0242ac120002"),
//       })
//     )
//     .orWhere((builder) =>
//       builder.where({
//         receiver_id: qb.raw("e65a6d16-69a5-11ee-8c99-0242ac120002"),
//         sender_id: qb.raw("196c12ab-5cd9-4c50-a830-45d139763fcb"),
//       })
//     ),
//   { filtering: true }
// );
// console.log(result);
