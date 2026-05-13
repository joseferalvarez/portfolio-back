import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helpers";
import { profile } from "./profile";
import { company } from "./company";

export const experience = pgTable("experience", {
  id: uuid("id").defaultRandom().primaryKey(),
  position: text("position").notNull(),
  description: text("description").notNull(),
  achievements: text("achievements").array(),
  profile: uuid("profile")
    .references(() => profile.id)
    .notNull(),
  company: uuid("company")
    .references(() => company.id)
    .notNull(),
  init_date: timestamp("init_date").notNull(),
  end_date: timestamp("end_date"),
  ...timestamps,
});
