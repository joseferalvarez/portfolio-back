import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helpers";
import { language } from "./language";
import { person } from "./person";

export const project = pgTable("project", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  webpage: text("webpage"),
  logo: text("logo"),

  person: uuid("person")
    .references(() => person.id)
    .notNull(),
  language: uuid("language")
    .references(() => language.id)
    .notNull(),

  ...timestamps,
});
