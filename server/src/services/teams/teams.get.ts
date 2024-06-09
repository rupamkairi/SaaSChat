import { and, eq } from "drizzle-orm";
import { db } from "../../database";
import { teams } from "../../schema";
import { FindTeamDTO } from "./index";

export async function findTeams() {
  const t = await db.select().from(teams);
  return t;
}

export async function findTeamById(p: FindTeamDTO) {
  const [t] = await db
    .select()
    .from(teams)
    .where(and(eq(teams.id, p.team_id)));
  return t;
}
