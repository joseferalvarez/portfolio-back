import { pgTable, text, uuid, boolean } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helpers";
import { profile } from "./profile";

export const repository = pgTable("repository", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  url: text("url").notNull(),
  starred: boolean("starred").default(false),
  profile: uuid("profile")
    .references(() => profile.id)
    .notNull(),
  ...timestamps,
});
