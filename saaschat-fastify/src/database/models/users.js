import { parse, stringify, v4 } from "uuid";
import { client } from "../cassandra.js";
import qb, { qbr, qbs } from "../querybuilder.js";

export async function createUser() {
  try {
    let user = {
      id: v4(),
      // ... Other fields goes here
      created_at: new Date(),
    };

    let result = await qbr(qb.insert(user).into("users"));
    return result;
  } catch (error) {
    console.log("createUser", error);
    throw error;
    client.shutdown();
  }
}

export async function findUsers() {
  try {
    let result = await qbr(qb.select("*").from("users"));
    return result;
  } catch (error) {
    console.log("findUsers", error);
    throw error;
    client.shutdown();
  }
}

export async function findUserById(id) {
  try {
    let result = await qbr(qb.select("*").from("users").where("id", "=", id));
    return result;
  } catch (error) {
    console.log("findUserById", error);
    throw error;
    client.shutdown();
  }
}

export async function updateUserById(id, update) {
  try {
    update = {
      ...update,
      // ... Other fields goes here
      updated_at: new Date(),
    };
    let result = await qbr(
      qb.update(update).from("users").where("id", "=", id)
    );
    return result;
  } catch (error) {
    console.log("updateUserById", error);
    throw error;
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
