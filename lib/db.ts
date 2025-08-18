import sql from "better-sqlite3";

const db = sql("users.db");

db.exec(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY,
  email TEXT UNIQUE,
  password TEXT NOT NULL,
  name TEXT NOT NULL
  );
`);

db.exec(`CREATE TABLE IF NOT EXISTS sessions (
  id TEXT NOT NULL PRIMARY KEY,
  expires_at INTEGER NOT NULL,
  user_id TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
)`);

db.exec(`CREATE TABLE IF NOT EXISTS contacts (
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  message TEXT NOT NULL
  )`);

db.exec(`
  CREATE TABLE IF NOT EXISTS newsletters (
    email TEXT NOT NULL UNIQUE
  )
`);

export default db;
