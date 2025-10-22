import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { client } from "@/drizzle/db";

async function main() {
  try {
    await migrate(drizzle(client), {
      migrationsFolder: "./src/drizzle/migrations",
    });
    console.log("Database migrated successfully");
  } catch (error) {
    console.error("Error migrating database", error);
  } finally {
    await client.end();
  }
}

main();
