import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helpers";

export const person = pgTable("person", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  lastname: text("lastname").notNull(),
  avatar: text("avatar"),

  ...timestamps,
});
