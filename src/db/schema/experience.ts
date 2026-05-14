import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestampsBetween } from "./columns.helpers";
import { person } from "./person";
import { company } from "./company";
import { language } from "./language";

export const experience = pgTable("experience", {
  id: uuid("id").defaultRandom().primaryKey(),
  position: text("position").notNull(),
  description: text("description").notNull(),
  achievements: text("achievements").array(),

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
