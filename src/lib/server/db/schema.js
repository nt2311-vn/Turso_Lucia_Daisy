import { sqliteTable, text, blob } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
	id: text("id").primaryKey(),
	first_name: text("first_name").notNull(),
	last_name: text("last_name").notNull(),
	email: text("email").notNull().unique(),
});

export const session = sqliteTable("user_session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => user.id),
	activeExpires: blob("active_expires", { mode: "bigint" }).notNull(),
	idleExpires: blob("idle_expires", { mode: "bigint" }).notNull(),
});

// export const key = sqliteTable("user_key", {
// 	id: text("id").primaryKey(),
// 	userId: text("user_id")
// 		.notNull()
// 		.references(() => user.id),
// 	hashedPassword: text("hashed_password"),
// });
