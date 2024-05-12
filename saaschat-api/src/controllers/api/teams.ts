import Elysia from "elysia";
import { chatsByTeamRoute } from "./chats";

export const teamsRoute = new Elysia({ prefix: "/teams" })
  .get("/:team_id", async ({ params, query, path }) => {
    console.log({ params, query, path });
    return "Ok";
  })
  .use(chatsByTeamRoute);
