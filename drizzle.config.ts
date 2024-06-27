import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' });

if (!process.env.TURSO_CONNECTION_URL) {
	throw new Error('No DB Url');
}

export default defineConfig({
	schema: './src/lib/db/schema.js',
	out: './drizzle/migrations',
	dialect: 'sqlite',
	driver: 'turso',
	dbCredentials: {
		url: process.env.TURSO_CONNECTION_URL!,
		authToken: process.env.TURSO_AUTH_TOKEN!
	}
});
