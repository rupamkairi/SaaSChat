import { client } from "../cassandra.js";

export async function getUsers() {
  try {
    const query = "SELECT * FROM users";
    const result = await client.execute(query, []);
    console.log("User with", result.rows);
    return result;
  } catch (error) {
    console.log("getUsers", error);
    client.shutdown();
  }
}
