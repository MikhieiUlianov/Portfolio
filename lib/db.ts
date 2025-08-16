/* npm install --save-dev @types/node
 */
/* import Database from "better-sqlite3";
const db = new Database('db/mydatabase.db') */
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

export default db;
