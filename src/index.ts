import { Hono } from "hono";
import { Database } from "./db/db";
import apiProfile from "./profile/profile.routes";
import apiContact from "./contact/contact.routes";
import { cors } from "hono/cors";

const app = new Hono();
app.use(cors());
const database = Database.getInstance();

database.connect(process.env.DATABASE_URL || "");

app.route("/api/v1/home", apiProfile);
app.route("/api/v1/contact", apiContact);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
