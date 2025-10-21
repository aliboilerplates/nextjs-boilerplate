import * as pg from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import { invoice } from "./invoices";
import { timeStamps } from "./shared";

export const customer = pg.pgTable(
  "customer",
  {
    id: pg.uuid("id").primaryKey().defaultRandom(),
    name: pg.varchar("name", { length: 255 }).notNull(),
    email: pg.text("email").notNull().unique(),
    imageUrl: pg.text("image_url").notNull(),
    ...timeStamps,
  },
  (table) => [pg.index("name_index").on(table.name)]
);

export const customerRelations = relations(customer, ({ many }) => ({
  invoices: many(invoice),
}));
