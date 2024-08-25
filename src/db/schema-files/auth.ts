import { text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { authSchema } from "./custom-schemas";

export const users = authSchema.table("users", {
  id: uuid("id").primaryKey(),
  email: varchar("email").unique(),
  encyrptedPassword: varchar("encyrpted_password"),
  // Email Verification
  emailVerificationToken: varchar("email_verification_token"),
  emailVerifiedAt: timestamp("email_verified_at"),
  emailVerificationTokenSentAt: timestamp("email_verification_token_sent_at"),
  // Metadata
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at"),
});

export const sessions = authSchema.table("sessions", {
  id: text("id").primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  })
    .notNull()
    .notNull(),
});
