import { sql } from "drizzle-orm";
import * as pg from "drizzle-orm/pg-core";

export const revenue = pg.pgTable(
  "revenue",
  {
    id: pg
      .uuid("id")
      .primaryKey()
      .default(sql`uuid_generate_v4()`),
    period: pg.date("period").notNull().unique(),
    revenue: pg.integer("revenue").notNull(),
  },
  (table) => [
    pg.check("first_day_of_month", sql`EXTRACT(DAY FROM ${table.period}) = 1`),
    pg.check("positive_revenue", sql`${table.revenue} > 0`),
    pg.index("period_revenue_index").on(table.period, table.revenue),
  ]
);
