import { db } from "@/drizzle/db";
import { customer, invoice, revenue, user } from "./schema";
import bcrypt from "bcrypt";
import {
  customersData,
  invoicesData,
  revenueData,
  usersData,
} from "@/app/lib/placeholder-data";

export async function seed() {
  try {
    await db
      .insert(user)
      .values(
        usersData.map((user) => ({
          name: user.name,
          email: user.email,
          password: bcrypt.hashSync(user.password, 10),
        }))
      )
      .onConflictDoNothing();

    await db.insert(customer).values(customersData).onConflictDoNothing();

    await db.insert(invoice).values(invoicesData).onConflictDoNothing();

    await db.insert(revenue).values(revenueData).onConflictDoNothing();
  } catch (error) {
    console.error("Error seeding database", error);
    throw error;
  }
}
