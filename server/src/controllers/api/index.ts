import { Elysia } from "elysia";
import { teamsRoute } from "./teams";
import { chatsRoute } from "./chats";

export const api = new Elysia().group("/api", (app) =>
  app
    .get("/", async () => {
      return "API";
    })
    .use(teamsRoute)
    .use(chatsRoute),
);
