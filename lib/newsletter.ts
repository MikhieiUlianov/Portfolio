import db from "./db";

export function subscribeNewsletters(email: string) {
  db.prepare(`INSERT INTO newsletters (email) VALUES (?)`).run(email);
}
