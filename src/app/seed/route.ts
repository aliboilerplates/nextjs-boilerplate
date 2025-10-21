import { seed } from "@/drizzle/seed";
import bcrypt from "bcrypt";
import postgres from "postgres";

export async function GET() {
  try {
    await seed();
    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
