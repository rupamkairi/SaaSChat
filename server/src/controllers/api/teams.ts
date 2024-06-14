import Elysia from "elysia";
import { findTeamById } from "@src/services/teams";
import { findChatByIdForTeam, findChatsByTeam } from "@src/services/chats";

export const teamsRoute = new Elysia().group("teams", (app) =>
  app
    .group("/:team_id", (app) =>
      app.group("/chats", (app) =>
        app
          .get("/", async ({ params, query, path }) => {
            const { ...results } = await findChatsByTeam({
              team_id: +params.team_id,
            });
            return { results };
          })
          .get("/:chat_id", async ({ params, query, path }) => {
            const { ...results } = await findChatByIdForTeam({
              team_id: +params.team_id,
              chat_id: +params.chat_id,
            });
            return { results };
          })
      )
    )
    .get("/:team_id", async ({ params, query, path }) => {
      // console.log({ params, query, path });
      const { ...results } = await findTeamById({ team_id: +params.team_id });
      return { results };
    })
);
