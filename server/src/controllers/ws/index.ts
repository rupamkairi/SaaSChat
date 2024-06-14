import Elysia from "elysia";
import { zMessage } from "./validate-message";
import { handleMessage } from "./handle-message";

export const websockets = new Elysia().ws("/ws", {
  open: (ws) => {
    console.log("socket_id", ws.id);
  },
  message(ws, message) {
    const { success, data } = zMessage.safeParse(message);

    if (!success) {
      return ws.send("Error");
    }

    const result = handleMessage(data);
    return ws.send(result);
  },
});
