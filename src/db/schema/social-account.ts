import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helpers";
import { socialMedia } from "./social-media";
import { person } from "./person";

export const socialAccount = pgTable("social_account", {
  id: uuid("id").defaultRandom().primaryKey(),
  url: text("url").notNull(),

  social_media: uuid("social_media")
    .references(() => socialMedia.id)
    .notNull(),
  person: uuid("person")
    .references(() => person.id)
    .notNull(),

  ...timestamps,
});
