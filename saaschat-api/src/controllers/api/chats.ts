import Elysia from "elysia";

export const chatsByTeamRoute = new Elysia({ prefix: "/:team_id/chats" })
  .get("/", async ({ params, query, path }) => {
    console.log({ params, query, path });
    return "Ok";
  })
  .get("/:chat_id", async ({ params, query }) => {
    console.log({ params, query });
    return "Ok";
  });
