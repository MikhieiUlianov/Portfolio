import { MongoClient } from "mongodb";

export async function connectToDataBase() {
  const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.ybqit5w.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority&appName=Cluster0`;
  const client = await MongoClient.connect(connectionString);
  const db = client.db();

  return db;
}
