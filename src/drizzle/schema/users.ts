import { sql } from "drizzle-orm";
import * as pg from "drizzle-orm/pg-core";
import { timeStamps } from "./shared";

export const user = pg.pgTable("users", {
  id: pg.uuid("id").primaryKey().defaultRandom(),
  name: pg.varchar("name", { length: 255 }).notNull(),
  email: pg.text("email").notNull().unique(),
  password: pg.text("password").notNull(),
  ...timeStamps,
});
