import { actions } from "../actions";
import { Message } from "../validate-message";
import { Result } from "../validate-result";

export function handleConnect(message: Message) {
  try {
    let result: Result = { ...message };
    const { action, data } = message;
    const segments = action.split(":");

    switch (+segments[1]) {
      case actions.widget_connect:
        result = {
          ...result,
          timestamp: Date.now(),
        };
      case actions.dashboard_connect:
        result = {
          ...result,
          timestamp: Date.now(),
        };

      default:
    }

    return result;
  } catch (error) {
    console.error(error);
  }
}
