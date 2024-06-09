import { z } from "zod";
import { zMessage } from "./validate-message";
import { sendMessage } from "./send";

type message = z.infer<typeof zMessage>;

export async function handleMessage(message: message) {
  let result;
  const { event, data } = message;
  switch (event) {
    case "ping":
      result = JSON.stringify({ type: "pong" });
      break;

    case "message_send":
      result = await sendMessage(data);
      break;

    default:
      break;
  }

  return result;
}
