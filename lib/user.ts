import db from "./db";

export function createUser(email: string, password: string, name: string) {
  const result = db
    .prepare(`INSERT INTO users (email, password, name) VALUES (?, ?, ?)`)
    .run(email, password, name);

  return result.lastInsertRowid;
}

export function getUserByEmail(email: string) {
  return db.prepare(`SELECT * FROM users WHERE email = ?`).get(email);
}

export function updatePassword(password: string, email: string) {
  return db
    .prepare(`UPDATE users SET password = ? WHERE email = ?`)
    .run(password, email);
}
