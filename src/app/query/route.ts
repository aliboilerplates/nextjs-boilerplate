import { db } from "@/drizzle/db";
import { customer, invoice } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

async function listInvoices() {
  try {
    return await db
      .select({
        amount: invoice.amount,
        name: customer.name,
      })
      .from(invoice)
      .innerJoin(customer, eq(invoice.customerId, customer.id))
      .where(eq(invoice.amount, 666));
  } catch (error) {
    console.error("Error listing invoices", error);
    throw new Error("Failed to list invoices");
  }
}

export async function GET() {
  try {
    return Response.json(await listInvoices());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
