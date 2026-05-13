import { Hono } from "hono";
import { Database } from "./db/db";

const app = new Hono();
const database = Database.getInstance();

database.connect(process.env.DATABASE_URL || "");

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
