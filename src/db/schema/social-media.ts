import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helpers";

export const socialMedia = pgTable("social_media", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  logo: text("logo").notNull(),

  ...timestamps,
});
