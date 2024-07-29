import { saveMessage } from "@src/services/messages";
import { actions } from "../actions";
import { Message } from "../validate-message";
import { Result } from "../validate-result";

export async function handleMessages(message: Message) {
  try {
    let result: Result = { ...message };
    const { action, data } = message;
    const segments = action.split(":");

    switch (+segments[1]) {
      case actions.messages_send:
        const _data = await saveMessage(data);
        result = {
          ...result,
          timestamp: Date.now(),
          data: _data,
        };

      default:
    }

    return result;
  } catch (error) {
    console.log(error);
  }
}
