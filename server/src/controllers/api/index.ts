import { Elysia } from "elysia";
import { teamsRoute } from "./teams";

export const api = new Elysia().group("/api", (app) =>
  app
    .get("/", async () => {
      return "API";
    })
    .use(teamsRoute),
);
