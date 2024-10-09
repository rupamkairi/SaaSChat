import { LoginDTO } from "./index";
import { db } from "@src/database";
import { auth, users } from "@src/schema";
import { and, eq } from "drizzle-orm";

export async function login(p: LoginDTO) {
  const [u] = await db
    .select()
    .from(auth)
    .where(and(eq(auth.username, p.username), eq(auth.password, p.password)))
    .leftJoin(users, eq(auth.id, users.auth_id));
  return { user: u.users };
}
