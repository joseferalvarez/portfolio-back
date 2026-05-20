import { Hono } from "hono";
import { Database } from "./db/db";
import apiProfile from "./profile/profile.routes";
import apiContact from "./contact/contact.routes";

const app = new Hono();
const database = Database.getInstance();

database.connect(process.env.DATABASE_URL || "");

app.route("/api/v1/home", apiProfile);
app.route("/api/v1/contact", apiContact);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
