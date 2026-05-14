import { pgTable, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helpers";
import { repository } from "./repository";
import { project } from "./project";

export const ProjectRepository = pgTable("project_repository", {
  id: uuid("id").defaultRandom().primaryKey(),

  project: uuid("project")
    .references(() => project.id)
    .notNull(),
  repository: uuid("repository")
    .references(() => repository.id)
    .notNull(),

  ...timestamps,
});
