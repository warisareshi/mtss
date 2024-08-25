import { sessions, users } from "@/db";

import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { Lucia } from "lucia";
import { db } from "@/db";
import { env } from "@/env";

const adapter = new DrizzlePostgreSQLAdapter(db, sessions as any, users as any);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    name: "asgn",
    attributes: {
      sameSite: "strict",
      secure: env.NODE_ENV === "production",
    },
  },
});
