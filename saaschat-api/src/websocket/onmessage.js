// import {
//   createUser,
//   findUsers,
//   findUserById,
//   updateUserById,
//   deleteUserById,
// } from "../database/models/users.js";
import { actions } from "../utils/actions.js";
import { widgetConnect } from "./handlers/open.js";

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

  // console.log(await findUsers());
  // console.log(await findUserById("e65a6d16-69a5-11ee-8c99-0242ac120002"));

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
