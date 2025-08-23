import { randomUUID } from "crypto";
import {
  connectToDatabase,
  findOne,
  insertDocument,
  updateUsersPassword,
} from "./db";

const client = await connectToDatabase();

export async function createUser(
  email: string,
  password: string,
  name: string
) {
  const userId = randomUUID();
  await insertDocument(client, "users", {
    _id: userId,
    email,
    password,
    name,
  });
  return { _id: userId, email, password, name };
}

export async function getUserByEmail(email: string) {
  const result = await findOne(client, email, "users");
  return result;
}

export async function updatePassword(password: string, email: string) {
  const result = await updateUsersPassword(client, email, password, "users");

  return result;
}
