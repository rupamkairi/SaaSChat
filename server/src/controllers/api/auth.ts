import { LoginDTO } from "@src/services/auth";
import { login } from "@src/services/auth/auth.functions";
import Elysia from "elysia";

export const authRoute = new Elysia().group("auth", (app) =>
  app.post("/login", async ({ body }: { body: LoginDTO }) => {
    const { ...results } = await login({
      username: body.username,
      password: body.password,
    });
    return { results };
  })
);
