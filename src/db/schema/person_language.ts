import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helpers";
import { language } from "./language";
import { person } from "./person";

export const personLanguage = pgTable("person_language", {
  id: uuid("id").defaultRandom().primaryKey(),
  level: text("level").notNull(),

  person: uuid("person")
    .references(() => person.id)
    .notNull(),
  language: uuid("language")
    .references(() => language.id)
    .notNull(),

  ...timestamps,
});
