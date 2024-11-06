import Elysia, { Context } from "elysia";
import { zMessage } from "./validate-message";
import { handleWSMessage } from "./handle-message";
import { ServerWebSocket } from "bun";
import { ElysiaWS } from "elysia/dist/ws";

export type WS = any;

export const websockets = new Elysia().ws("/ws", {
  open: async (ws) => {
    // console.log("open", ws.id);
  },
  message: async (ws, message) => {
    //    console.log(message)
    const { success, data: _message } = zMessage.safeParse(message);

    if (!success) {
      return ws.send("Error");
    }

    const result = await handleWSMessage(_message, ws);
    //    console.log(result)
    return ws.send({ result });
  },
});
