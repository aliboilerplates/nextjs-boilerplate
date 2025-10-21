import * as pg from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import { invoice } from "./invoices";

export const customer = pg.pgTable(
  "customer",
  {
    id: pg
      .uuid("id")
      .primaryKey()
      .default(sql`uuid_generate_v4()`),
    name: pg.varchar("name", { length: 255 }).notNull(),
    email: pg.text("email").notNull().unique(),
    imageUrl: pg.text("image_url").notNull(),
  },
  (table) => [pg.index("name_index").on(table.name)]
);

export const customerRelations = relations(customer, ({ many }) => ({
  invoices: many(invoice),
}));
