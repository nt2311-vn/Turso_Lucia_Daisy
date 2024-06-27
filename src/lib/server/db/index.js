import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { env } from "$env/dynamic/private";

export const libsqlClient = createClient({
	url: /** @type {string} */ (env.TURSO_CONNECTION_URL),
	authToken: /** @type {string} */ (env.TURSO_AUTH_TOKEN),
});
