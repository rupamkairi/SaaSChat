import { Elysia } from "elysia";
import { teamsRoute } from "./teams";
import { chatsRoute } from "./chats";
import { usersRoute } from "./users";

export const api = new Elysia().group("/api", (app) =>
  app
    .get("/", async () => {
      return "API";
    })
    .use(usersRoute)
    .use(teamsRoute)
    .use(chatsRoute),
);
