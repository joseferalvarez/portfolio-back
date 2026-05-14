import { Hono } from "hono";
import { Database } from "./db/db";
import profile from "./profile/profile.routes";

const app = new Hono();
const database = Database.getInstance();

database.connect(process.env.DATABASE_URL || "");

app.route("/api/v1/home", profile);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
