import { drizzle } from "drizzle-orm/postgres-js";
import { env } from "@/env";
import postgres from "postgres";

// Schema
import { users, sessions } from "./schema-files/auth";

const schema = {
  users,
  sessions,
};

// Drizzle Database Connection
const sql = postgres(env.DATABASE_URL);
const db = drizzle(sql, { schema });

// Exports
export { db };
export { users, sessions };
