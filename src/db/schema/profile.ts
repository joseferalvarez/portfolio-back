import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helpers";

export const profile = pgTable("profile", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  lastname: text("lastname").notNull(),
  position: text("position").notNull(),
  bio: text("bio"),
  description: text("description"),
  avatar: text("avatar"),
  curriculum: text("curriculum"),
  ...timestamps,
});
