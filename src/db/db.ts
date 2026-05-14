import { drizzle } from "drizzle-orm/postgres-js";

export class Database {
  private static instance: Database;
  db: any;

  connect(uri: string) {
    try {
      this.db = drizzle(uri);
    } catch (e) {
      throw new Error(`Database connection error: ${e}`);
    }
  }

  async query(action: Function) {
    await action(this.db);
  }

  static getInstance(): Database {
    if (!Database.instance) Database.instance = new Database();
    return Database.instance;
  }
}
