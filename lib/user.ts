import db from "./db";

export function createUser(email: string, password: string, name: string) {
  const result = db
    .prepare(`INSERT INTO users (email, password, name) VALUES (?, ?, ?)`)
    .run(email, password, name);

  return result.lastInsertRowid;
}
