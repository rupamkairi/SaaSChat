CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"username" varchar(256),
	"email" text,
	"password" text,
	"created_at" timestamp,
	"updated_at" timestamp
);
