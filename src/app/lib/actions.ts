"use server";

import { db } from "@/drizzle/db";
import { invoice } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number().positive(),
  status: z.enum(["pending", "paid"]),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true });

export interface CreateInvoiceState {
  success: boolean;
  message: string;
  errors: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  formData?: FormData;
}

export async function createInvoice(formData: FormData) {
  const result = CreateInvoice.safeParse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
  console.log(Array.from(formData.entries()));
  if (!result.success) {
    return;
  }

  const { customerId, amount, status } = result.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split("T")[0];

  await db.insert(invoice).values({
    customerId,
    amount: amountInCents,
    status,
    date,
  });

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });

  const amountInCents = amount * 100;

  await db
    .update(invoice)
    .set({
      customerId,
      amount: amountInCents,
      status,
    })
    .where(eq(invoice.id, id));

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}
