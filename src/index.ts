import { Hono } from "hono";
import { Database } from "./db/db";
import { cors } from "hono/cors";
import apiProfile from "./profile/profile.routes";
import contactRouter from "./lib/contact/infrastructure/hono-contact-router";

const app = new Hono();
app.use(cors());
const database = Database.getInstance();

database.connect(process.env.DATABASE_URL || "");

app.route("/api/v1/home", apiProfile);

app.route("/api/v1/contact", contactRouter);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
