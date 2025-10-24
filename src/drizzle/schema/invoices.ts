import { relations, sql } from "drizzle-orm";
import * as pg from "drizzle-orm/pg-core";
import { customer } from "./customers";
import { timeStamps } from "./shared";

export const invoice = pg.pgTable(
  "invoice",
  {
    id: pg.uuid("id").primaryKey().defaultRandom(),
    customerId: pg
      .uuid("customer_id")
      .notNull()
      .references(() => customer.id),
    amount: pg.integer("amount").notNull(),
    status: pg.varchar("status", { length: 20 }).notNull().default("pending"),
    date: pg.date("date").notNull(),
    ...timeStamps,
  },
  (table) => [
    pg.check("status_check", sql`${table.status} IN ('pending', 'paid')`),
    pg.unique("customer_id_date_unique").on(table.customerId, table.date),
    pg.index("customer_id_index").on(table.customerId),
    pg.index("date_index").on(table.date),
    pg.index("status_index").on(table.status),
  ]
);

export const invoiceRelations = relations(invoice, ({ one }) => ({
  customer: one(customer, {
    fields: [invoice.customerId],
    references: [customer.id],
  }),
}));
