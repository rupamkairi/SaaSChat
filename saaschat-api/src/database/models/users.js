import { parse, stringify, v4 } from "uuid";
import { client } from "../cassandra.js";
import qb, { qbr, qbs } from "../querybuilder.js";

export async function createUser() {
  try {
    const query = "";
    let result = await client.execute(query, []);
    result = result.rows.flat();
    return result;
  } catch (error) {
    console.log("createUser", error);
    client.shutdown();
  }
}

export async function findUsers() {
  try {
    // const query = "SELECT * FROM users";
    // let result = await client.execute(query, []);
    // result = result.rows.flat();
    // return result;

    // const sql = qbr.select("*").from("users").toSQL();
    // console.log(sql);

    let result = await qbr(qb.select("*").from("users"));
    return result;
  } catch (error) {
    console.log("findUsers", error);
    client.shutdown();
  }
}

export async function findUserById(id) {
  try {
    let result = await qbr(qb.select("*").from("users").where("id", "=", id));
    return result;
  } catch (error) {
    console.log("findUserById", error);
    client.shutdown();
  }
}

export async function updateUserById(id) {
  try {
    const query = "UPDATE users SET updated_at = ? WHERE id = ?";
    let result = await client.execute(query, [new Date(), id]);
    result = result.rows;
    return result;
  } catch (error) {
    console.log("updateUserById", error);
    client.shutdown();
  }
}

export async function deleteUserById(id) {
  try {
    const query = "DELETE FROM users WHERE id = ? IF EXISTS";
    let result = await client.execute(query, [id]);
    result = result.rows.flat();
    return result;
  } catch (error) {
    console.log("deleteUserById", error);
    client.shutdown();
  }
}
