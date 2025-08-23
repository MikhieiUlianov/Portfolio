import { connectToDatabase, insertDocument } from "./db";

export async function subscribeNewsletters(email: string) {
  const client = await connectToDatabase();

  const result = insertDocument(client, "newsletters", { email });

  return result;
}
