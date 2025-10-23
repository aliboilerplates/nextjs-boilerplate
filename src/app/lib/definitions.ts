import { customer } from "@/drizzle/schema/customers";
import { invoice } from "@/drizzle/schema/invoices";
import { revenue } from "@/drizzle/schema/revenue";
import { user } from "@/drizzle/schema/users";

export type NewUser = typeof user.$inferInsert;
export type User = typeof user.$inferSelect;

export type NewCustomer = typeof customer.$inferInsert;
export type Customer = typeof customer.$inferSelect;

export type NewInvoice = typeof invoice.$inferInsert;
export type Invoice = typeof invoice.$inferSelect;

export type NewRevenue = typeof revenue.$inferInsert;
export type Revenue = typeof revenue.$inferSelect;

export type LatestInvoice = {
  id: Invoice["id"];
  name: Customer["name"];
  imageUrl: Customer["imageUrl"];
  email: Customer["email"];
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, "amount"> & {
  amount: number;
};

export type InvoicesTable = {
  id: Invoice["id"];
  name: Customer["name"];
  email: Customer["email"];
  imageUrl: Customer["imageUrl"];
  date: Invoice["date"];
  amount: number;
  status: Invoice["status"];
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: "pending" | "paid";
};
