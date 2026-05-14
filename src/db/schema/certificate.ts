import { pgTable, uuid, text } from "drizzle-orm/pg-core";
import { experience } from "./experience";
import { education } from "./education";
import { timestamps } from "./columns.helpers";
import { person } from "./person";
import { company } from "./company";
import { language } from "./language";

export const certificate = pgTable("certificate", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  url: text("url"),

  language: uuid("language")
    .references(() => language.id)
    .notNull(),
  person: uuid("person")
    .references(() => person.id)
    .notNull(),
  company: uuid("company")
    .references(() => company.id)
    .notNull(),

  experience: uuid("experience").references(() => experience.id),
  education: uuid("education").references(() => education.id),

  ...timestamps,
});
