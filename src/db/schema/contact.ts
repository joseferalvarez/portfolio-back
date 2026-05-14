import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helpers";

export const contact = pgTable("contact", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  phone: text("phone"),
  linkedin: text("linkedin"),
  message: text("message").notNull(),

  ...timestamps,
});
