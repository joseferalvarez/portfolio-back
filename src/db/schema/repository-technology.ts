import { pgTable, uuid } from "drizzle-orm/pg-core";
import { repository } from "./repository";
import { technology } from "./technology";
import { timestamps } from "./columns.helpers";

export const repositoryTechnology = pgTable("repository_technology", {
  id: uuid("id").defaultRandom().primaryKey(),
  repository: uuid("repository")
    .references(() => repository.id)
    .notNull(),
  technology: uuid("technology")
    .references(() => technology.id)
    .notNull(),
  ...timestamps,
});
