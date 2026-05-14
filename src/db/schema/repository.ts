import { pgTable, text, uuid, boolean } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helpers";
import { person } from "./person";

export const repository = pgTable("repository", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  url: text("url").notNull(),
  starred: boolean("starred").default(false),
  type: text("type"),

  person: uuid("person")
    .references(() => person.id)
    .notNull(),

  ...timestamps,
});
