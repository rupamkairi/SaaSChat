import {
  createUser,
  findUsers,
  updateUserById,
} from "../../../database/models/users.js";

export async function usersCreate() {
  const user = await createUser();
  return user;
}

export async function usersGetAll() {
  try {
    const users = await findUsers();
    // console.log("usersGetAll", users);
    return users;
  } catch (error) {
    throw error;
  }
}

export async function usersUpdateById(data) {
  let { id, ...update } = data;
  const user = await updateUserById(id, update);
  return user;
}
