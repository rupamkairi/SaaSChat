import {z} from "zod";
import {zMessage} from "./validate-message";
import {sendMessage} from "./send";
import {actions} from "@src/controllers/ws/actions";

type message = z.infer<typeof zMessage>;

export async function handleMessage(message: message) {
  let result;
  const {nonce, action} = message;
  const segments = action.split(':');


  if (+segments[0] === actions.unknown) {
    switch (+segments[1]) {
      case (actions.ping):
        result = {nonce, action, timestamp: Date.now()}
      case (actions.heartbeat):
        result = {nonce, action, timestamp: Date.now()}
        break;

      default:
    }
  }


  return result;
}
