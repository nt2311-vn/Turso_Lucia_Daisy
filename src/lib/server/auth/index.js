import { Lucia } from "lucia";
import { LibSQLAdapter } from "@lucia-auth/adapter-sqlite";
import { libsqlClient } from "../db";

const adapter = new LibSQLAdapter(libsqlClient, {
	user: "user",
	session: "user_session",
});

export const lucia = new Lucia(adapter, {
	sessionCookie: { attributes: { secure: true } },
	getUserAttributes: (attributes) => {
		return {
			email: attributes.email,
		};
	},
});
