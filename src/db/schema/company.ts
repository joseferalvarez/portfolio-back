import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helpers";

export const company = pgTable("company", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name"),
  webpage: text("webpage"),
  logo: text("logo"),
  ...timestamps,
});
