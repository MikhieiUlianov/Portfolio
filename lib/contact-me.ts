import { connectToDatabase, insertDocument } from "./db";

export async function storeData(email: string, name: string, message: string) {
  const client = await connectToDatabase();

  const result = await insertDocument(client, "contacts", {
    email,
    name,
    message,
  });
  return result;
}
