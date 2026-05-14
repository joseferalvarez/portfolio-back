import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helpers";

export const technology = pgTable("technology", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  logo: text("logo").notNull(),
  badge: text("badge").notNull(),
  type: text("type").notNull(),
  webpage: text("webpage"),

  ...timestamps,
});
