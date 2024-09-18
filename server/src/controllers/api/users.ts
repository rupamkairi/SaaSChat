import { findUserById } from "@src/services/users";
import { Elysia } from "elysia";

export const usersRoute = new Elysia().group("users", (app) =>
  app.group("/:user_id", (app) =>
    app.get("/", async ({ params, query, path }) => {
      const { ...results } = await findUserById({
        user_id: +params.user_id,
      });
      return { results };
    }),
  ),
);
