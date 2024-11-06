import { z } from "zod";
import { zMessage } from "./validate-message";
import { sendMessage } from "./send";
import { actions } from "@src/controllers/ws/actions";
import { handleConnect } from "./action-handlers/connect";
import { handleMessages } from "./action-handlers/messages";
import { WS } from ".";

type message = z.infer<typeof zMessage>;
export async function handleWSMessage(message: message, ws: WS) {
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

  // console.log(segments);
  switch (+segments[0]) {
    case actions.connect:
      console.log("connect");
      result = handleConnect(message, ws);
      break;
    case actions.messages:
      result = await handleMessages(message);
      break;
    default:
  }
  // console.log(result);

  return result;
}
