import db from "./db";

export function storeData(email: string, name: string, message: string) {
  db.prepare(
    `INSERT INTO contacts (email, name, message) VALUES (?, ?, ?)`
  ).run(email, name, message);
}
