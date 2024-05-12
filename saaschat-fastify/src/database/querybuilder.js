import { types } from "cassandra-driver";
import knex from "knex";
import { client } from "./cassandra.js";
import { stringify } from "uuid";

// since client value was required,
// we just have 'pg' anyway.
// although cql will not be same as sql,
// but for most parts, that will be enuf
const qb = knex({ client: "pg" });
export const fn = knex({ client: "pg" }).fn;

/**
 * @param {knex.Knex.QueryBuilder} fn
 * @returns {knex.Knex.Sql}
 */
export function qbs(fn) {
  return fn.toSQL();
}

/**
 * @param {knex.Knex.QueryBuilder} fn
 * @returns {Promise<[]>}
 */
export async function qbr(fn, { filtering = false }) {
  let { sql, bindings } = qbs(fn);
  if (filtering) sql += " ALLOW FILTERING";

  let result = null;

  try {
    console.log(sql);
    result = await client.execute(sql, bindings);

    let rows =
      result?.rows?.flatMap((row) => {
        return {
          ...row,
          id: stringify(row.get("id").buffer),
        };
      }) ??
      (sql.includes("insert") ? true : null) ??
      (sql.includes("update") ? true : null);

    return rows;
  } catch (error) {
    throw error;
  }
}

export default qb;
