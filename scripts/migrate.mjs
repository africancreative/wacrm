#!/usr/bin/env node
/**
 * One-shot migration runner for Supabase.
 *
 * Usage:
 *   node scripts/migrate.mjs "postgresql://postgres.<project>@<host>:6543/postgres?sslmode=require"
 *
 * The connection string is in your Supabase Dashboard →
 * Project Settings → Database → Connection string (transaction pooler).
 *
 * With pgvector/SSL:  node scripts/migrate.mjs "$CONNECTION_STRING"
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import pg from "pg";

const __dirname = dirname(fileURLToPath(import.meta.url));
const MIGRATION_FILE = resolve(__dirname, "../supabase/combined.sql");

async function main() {
  const connectionString = process.argv[2];
  if (!connectionString) {
    console.error("Usage: node scripts/migrate.mjs <connection-string>");
    console.error("");
    console.error("Connection string from Supabase Dashboard → Project Settings → Database:");
    console.error("  postgresql://postgres.<project-ref>:<password>@aws-0-<region>.pooler.supabase.com:6543/postgres?pgbouncer=true");
    process.exit(1);
  }

  console.log("Reading migration file...");
  const sql = readFileSync(MIGRATION_FILE, "utf-8");
  console.log(`Loaded ${sql.length} characters / ${sql.split("\n").length} lines`);

  const client = new pg.Client({ connectionString, ssl: { rejectUnauthorized: false } });

  console.log("Connecting...");
  await client.connect();
  console.log("Connected. Running migration...");

  try {
    await client.query(sql);
    console.log("Migration completed successfully!");
  } catch (err) {
    console.error("Migration failed:", err.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

main();
