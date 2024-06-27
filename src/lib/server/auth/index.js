import { Lucia } from "lucia";
import { LibSQLAdapter } from "@lucia-auth/adapter-sqlite";
import { libsqlClient } from "../db";

const adapter = new LibSQLAdapter(libsqlClient, {
	user: "user",
	session: "user_session",
});
