import { findMessageByChat } from "@src/services/messages";
import { Elysia } from "elysia";

export const chatsRoute = new Elysia().group("chats", (app) =>
  app.group("/:chat_id", (app) =>
    app.group("/messages", (app) =>
      app.get("/", async ({ params, query, path }) => {
        const { ...results } = await findMessageByChat({
          chat_id: +params.chat_id,
        });
        return { results };
      }),
    ),
  ),
);
