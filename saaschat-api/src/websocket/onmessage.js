import { actions } from "../utils/actions.js";
import { dashboardConnect, widgetConnect } from "./handlers/open.js";
import { usersGetAll } from "./handlers/users/users.js";

/**
 * Description of the Function
 * @param {import("@fastify/websocket").SocketStream} connection,
 * @param {MessageEvent} event
 */
export async function onmessage(connection, event) {
  const query = JSON.parse(event.data);
  const { action } = query;

  try {
    const segments = action.split(":");

    let result;

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
        case actions.users_get_all:
          result = await usersGetAll();
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
    const { code, message } = error;
    const response = JSON.stringify({
      query,
      error: { code, message },
    });
    connection.socket.send(response);
  }
}
