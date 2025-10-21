import { sql } from "drizzle-orm";
import * as pg from "drizzle-orm/pg-core";

export const user = pg.pgTable("users", {
  id: pg
    .uuid("id")
    .primaryKey()
    .default(sql`uuid_generate_v4()`),
  name: pg.varchar("name", { length: 255 }).notNull(),
  email: pg.text("email").notNull().unique(),
  password: pg.text("password").notNull(),
});
