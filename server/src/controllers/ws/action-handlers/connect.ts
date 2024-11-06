import { usersWS } from "@src/services/users/users-websockets";
import { actions } from "../actions";
import { Message } from "../validate-message";
import { Result } from "../validate-result";
import { errorResponses } from "@src/responses/error-responses";
import { statusResponses } from "@src/responses/status-responses";
import { WS } from "..";

export function handleConnect(message: Message, ws: WS) {
  try {
    let result: Result = { ...message };
    const { action, data } = message;
    const segments = action.split(":");

    switch (+segments[1]) {
      case actions.widget_connect:
        const _data = handleWidgetConnect(message, ws);
        console.log(_data);
        result = {
          ...result,
          data: _data,
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
    console.error("handleConnect", error);
    throw error;
  }
}

export function handleWidgetConnect(message: Message, ws: WS) {
  try {
    const { data } = message;
    if (!data?.guest_id)
      throw new Error(errorResponses.NO_GUEST_ID.message, {
        cause: errorResponses.NO_GUEST_ID.ERROR_CODE,
      });

    if (!usersWS[data?.guest_id]) {
      console.log(statusResponses.NEW_GUEST);
      usersWS[data?.guest_id!] = [ws.id];
    }

    return usersWS[data?.guest_id!];
  } catch (error) {
    console.error("handleWidgetConnect", error);
    throw error;
  }
}
