// import {
//   createUser,
//   findUsers,
//   updateUserById,
// } from "../../../database/models/users.js";

import { v4 } from "uuid";
import { db } from "../../../drizzle/index.js";
import { users } from "../../../drizzle/schema/index.js";

export async function usersCreate() {
  try {
    // const user = await createUser();
    // const user = {};
    const randomNameV4 = v4();
    const randomName = randomNameV4.split("-").at(-1);
    const _users = await db
      .insert(users)
      .values({
        id: randomNameV4,
        username: randomName,
        created_at: new Date(),
      })
      .returning();
    const _user = _users[0];
    return _user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function usersGetAll() {
  try {
    // const users = await findUsers();
    // const users = [];
    const _users = await db.select("*").from(_users);
    // console.log("usersGetAll", users);
    return _users;
  } catch (error) {
    throw error;
  }
}

export async function usersUpdateById(data) {
  try {
    console.log(data);
    let { id, ...update } = data;
    // const user = await updateUserById(id, update);
    const user = [];
    return user;
  } catch (error) {
    throw error;
  }
}
