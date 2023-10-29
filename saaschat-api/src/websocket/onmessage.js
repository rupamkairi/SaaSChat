import { actions } from "../utils/actions.js";
import heartbeat from "./handlers/health/heartbeat.js";
import pingPong from "./handlers/health/ping.js";
import {
  messageGetBetween,
  messagesGetAll,
  messagesSend,
} from "./handlers/messages.js";
import { dashboardConnect, widgetConnect } from "./handlers/open.js";
import {
  usersCreate,
  usersGetAll,
  usersUpdateById,
} from "./handlers/users/users.js";

/**
 * Description of the Function
 * @param {import("@fastify/websocket").SocketStream} connection,
 * @param {MessageEvent} event
 */
export async function onmessage(connection, event) {
  const query = JSON.parse(event.data);
  const { action, data } = query;

  try {
    const segments = action.split(":");

    let result = null;

    if (+segments[0] === actions.unknown) {
      switch (+segments[1]) {
        case actions.ping:
          result = await pingPong();
          break;

        case actions.heartbeat:
          result = await heartbeat();
          break;

        default:
      }
    }

    if (+segments[0] === actions.connect) {
      switch (+segments[1]) {
        case actions.widget_connect:
          result = await widgetConnect();
          break;

        case actions.dashboard_connect:
          result = await dashboardConnect();
          break;

        default:
      }
    }

    if (+segments[0] === actions.users) {
      switch (+segments[1]) {
        case actions.users_create:
          result = await usersCreate();
          break;

        case actions.users_get_all:
          result = await usersGetAll();
          break;

        case actions.users_update_by_id:
          result = await usersUpdateById(data);
          break;

        default:
          break;
      }
    }

    if (+segments[0] === actions.messages) {
      switch (+segments[1]) {
        case actions.messages_send:
          result = await messagesSend(data);
          break;

        case actions.messages_get_all:
          result = await messagesGetAll();
          break;

        case actions.messages_get_between:
          result = await messageGetBetween(data);
          break;

        default:
          break;
      }
    }

    console.log("onmessage", result);

    const response = JSON.stringify({
      query,
      result,
    });
    connection.socket.send(response);
  } catch (error) {
    // console.log(Object.keys(error));
    const { code, message } = error;
    const response = JSON.stringify({
      query,
      error: { code, message },
    });
    connection.socket.send(response);
  }
}
