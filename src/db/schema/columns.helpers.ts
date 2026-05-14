import { timestamp } from "drizzle-orm/pg-core";

export const timestamps = {
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
};

export const timestampsBetween = {
  init_date: timestamp("init_date").notNull(),
  end_date: timestamp("end_date"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
};
