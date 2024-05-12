import { Elysia } from "elysia";
import { exampleCreateMessage } from "./services/messages/messages.post";
import { teamsRoute } from "./controllers/api/teams";
import { zMessage } from "./controllers/ws/validate-message";
import { handleMessage } from "./controllers/ws/handle-message";

const api = new Elysia({ prefix: "/api" })
  .get("/", async () => {
    const r = await exampleCreateMessage();
    console.log(r);
    return "Ok";
  })
  .use(teamsRoute);

const app = new Elysia().use(api).ws("/ws", {
  message(ws, message) {
    const { success, data } = zMessage.safeParse(message);

    if (!success) {
      return ws.send("Error");
    }

    const result = handleMessage(data);
    return ws.send(result);
  },
});

app.listen(4000);
