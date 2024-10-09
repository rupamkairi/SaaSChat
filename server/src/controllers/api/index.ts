import { Elysia } from "elysia";
import { teamsRoute } from "./teams";
import { chatsRoute } from "./chats";
import { usersRoute } from "./users";
import { authRoute } from "./auth";

export const api = new Elysia().group("/api", (app) =>
  app
    .get("/", async () => {
      return "API";
    })
    .use(authRoute)
    .use(usersRoute)
    .use(teamsRoute)
    .use(chatsRoute)
);
