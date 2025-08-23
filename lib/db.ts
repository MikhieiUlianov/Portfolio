import { MongoClient, type Document } from "mongodb";

let client: MongoClient | null = null;

export async function connectToDatabase() {
  if (client) return client;
  const url = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.t3i0wy9.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`;

  try {
    client = await MongoClient.connect(url);
    const db = client.db();
    await db.collection("users").createIndex({ email: 1 }, { unique: true });

    return client;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong."
    );
  }
}

export async function insertDocument(
  client: MongoClient,
  collection: string,
  document: Document
) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function findOne(
  client: MongoClient,
  term: string,
  collection: string
) {
  const db = client.db();
  const result = await db.collection(collection).findOne({ email: term });
  return result;
}

export async function updateUsersPassword(
  client: MongoClient,
  email: string,
  password: string,
  collection: string
) {
  const db = client.db();
  const result = await db
    .collection(collection)
    .updateOne({ email }, { $set: { password } });
  return result;
}
