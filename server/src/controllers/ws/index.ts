import Elysia from "elysia";
import { zMessage } from "./validate-message";
import { handleMessage } from "./handle-message";

export const websockets = new Elysia().ws("/ws", {
  open: async (ws) => {
//    console.log("socket_id", ws.id);
  },
  message: async (ws, message) => {
//    console.log(message)
    const { success, data:_message } = zMessage.safeParse(message);

    if (!success) {
      return ws.send("Error");
    }

    const result = await handleMessage(_message);
//    console.log(result)
    return ws.send(result);
  },
});
