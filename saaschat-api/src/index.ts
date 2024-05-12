import { Elysia } from "elysia";

const api = new Elysia({ prefix: "/api" }).get("/", () => "Ok");

const app = new Elysia().use(api).ws("/ws", {
  message(ws, message) {
    ws.send(message);
  },
});

app.listen(3000);
