import { boolean, numeric, pgTable, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helpers";
import { person } from "./person";
import { technology } from "./technology";

export const personTechnology = pgTable("person_technology", {
  id: uuid("id").defaultRandom().primaryKey(),

  person: uuid("person")
    .references(() => person.id)
    .notNull(),
  technology: uuid("technology")
    .references(() => technology.id)
    .notNull(),

  experience: numeric("experience").notNull().default("1"),
  starred: boolean("starred").default(false),

  ...timestamps,
});
