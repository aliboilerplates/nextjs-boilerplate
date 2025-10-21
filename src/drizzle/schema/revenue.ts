import { sql } from "drizzle-orm";
import * as pg from "drizzle-orm/pg-core";
import { timeStamps } from "./shared";

export const revenue = pg.pgTable(
  "revenue",
  {
    id: pg.uuid("id").primaryKey().defaultRandom(),
    period: pg.date("period", { mode: "string" }).notNull(),
    revenue: pg.integer("revenue").notNull(),
    ...timeStamps,
  },
  (table) => [
    pg.check("first_day_of_month", sql`EXTRACT(DAY FROM ${table.period}) = 1`),
    pg.check("positive_revenue", sql`${table.revenue} > 0`),
    pg.uniqueIndex("period_index").on(table.period),
  ]
);
