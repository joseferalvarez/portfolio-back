import { boolean, pgTable, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helpers";
import { technology } from "./technology";
import { experience } from "./experience";

export const experienceTechnology = pgTable("experience_technology", {
  id: uuid("id").defaultRandom().primaryKey(),

  experience: uuid("experience")
    .references(() => experience.id)
    .notNull(),
  technology: uuid("technology")
    .references(() => technology.id)
    .notNull(),

  starred: boolean("starred").default(false),

  ...timestamps,
});
