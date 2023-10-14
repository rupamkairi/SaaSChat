import { types } from "cassandra-driver";
import knex from "knex";
import { client } from "./cassandra.js";
import { stringify } from "uuid";

// since client value was required,
// we just have 'pg' anyway.
// although cql will not be same as sql,
// but for most parts, that will be enuf
const qb = knex({ client: "pg" });

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
export async function qbr(fn) {
  const { sql, bindings } = qbs(fn);
  let result = await client.execute(sql, bindings);
  let rows = result.rows.flatMap((row) => {
    return {
      ...row,
      id: stringify(row.get("id").buffer),
    };
  });
  return rows;
}

export default qb;
