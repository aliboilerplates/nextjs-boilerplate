import * as pg from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const timeStamps = {
  createdAt: pg
    .timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: pg
    .timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => sql`NOW()`),
};
