import { FindUserDTO } from "./index";
import { db } from "@src/database";
import { users } from "@src/schema";
import { and, eq } from "drizzle-orm";

export async function findUserById(p: FindUserDTO) {
  const [u] = await db
    .select()
    .from(users)
    .where(and(eq(users.id, p.user_id)));
  return { user: u };
}
