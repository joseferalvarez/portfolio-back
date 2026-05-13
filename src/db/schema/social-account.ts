import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helpers";
import { profile } from "./profile";
import { socialMedia } from "./social-media";

export const socialAccount = pgTable("social_account", {
  id: uuid("id").defaultRandom().primaryKey(),
  profile: uuid("profile")
    .references(() => profile.id)
    .notNull(),
  social_media: uuid("social_media")
    .references(() => socialMedia.id)
    .notNull(),
  url: text("url").notNull(),
  ...timestamps,
});
