import { actions } from "../utils/actions.js";
import { widgetConnect } from "./handlers/open.js";
import { client } from "../database/cassandra.js";

/**
 * Represents a book.
 * @param {import("@fastify/websocket").SocketStream} connection,
 * @param {MessageEvent} event
 */
export async function onmessage(connection, event) {
  connection.socket.send(event.data);

  const { action } = JSON.parse(event.data);
  const segments = action.split(":");

  let result;

  console.log(client.getState(), "Cassandra Message");

  if (segments[0] == actions.connect) {
    switch (segments[1]) {
      case actions.widget_connect:
        result = await widgetConnect();

      case actions.dashboard_connect:
        result = await widgetConnect();

      default:
    }
  }
}
