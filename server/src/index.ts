import { Elysia } from "elysia";
import { config } from "./config";
import { api } from "./controllers/api";
import { websockets } from "./controllers/ws";
import cors from "@elysiajs/cors";

const app = new Elysia().use(cors()).use(api).use(websockets);

app.listen(config.port, () => {
  console.log(`Server started on http://localhost:${config.port}`);
});
