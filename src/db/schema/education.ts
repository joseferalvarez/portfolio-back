import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestampsBetween } from "./columns.helpers";
import { person } from "./person";
import { company } from "./company";
import { language } from "./language";

export const education = pgTable("education", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  webpage: text("webpage"),
  logo: text("logo"),

  language: uuid("language")
    .references(() => language.id)
    .notNull(),
  person: uuid("person")
    .references(() => person.id)
    .notNull(),
  company: uuid("company")
    .references(() => company.id)
    .notNull(),

  ...timestampsBetween,
});
