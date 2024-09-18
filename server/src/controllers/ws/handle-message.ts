import { z } from "zod";
import { zMessage } from "./validate-message";
import { sendMessage } from "./send";
import { actions } from "@src/controllers/ws/actions";
import { handleConnect } from "./action-handlers/connect";
import { handleMessages } from "./action-handlers/messages";

type message = z.infer<typeof zMessage>;
export async function handleWSMessage(message: message) {
  let result;
  const { nonce, action, data } = message;
  const segments = action.split(":");

  if (+segments[0] === actions.unknown) {
    switch (+segments[1]) {
      case actions.ping:
        result = { timestamp: Date.now(), nonce, action };
      case actions.heartbeat:
        result = { timestamp: Date.now(), nonce, action };
        break;

      default:
    }
  }

  switch (+segments[0]) {
    case actions.connect:
      result = handleConnect(message);
      break;
    case actions.messages:
      result = await handleMessages(message);
      break;
    default:
  }

  return result;
}
