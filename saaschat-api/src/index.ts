import { Elysia } from "elysia";
import { exampleCreateMessage } from "./services/messages/messages.post";

const api = new Elysia({ prefix: "/api" }).get("/", async () => {
  const r = await exampleCreateMessage();
  console.log(r);
  return "Ok";
});

const app = new Elysia().use(api).ws("/ws", {
  message(ws, message) {
    ws.send(message);
  },
});

app.listen(4000);
