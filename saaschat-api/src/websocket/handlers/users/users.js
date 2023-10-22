import { findUsers } from "../../../database/models/users.js";

export async function usersGetAll() {
  try {
    const users = await findUsers();
    // console.log("usersGetAll", users);
    return users;
  } catch (error) {
    throw error;
  }
}
