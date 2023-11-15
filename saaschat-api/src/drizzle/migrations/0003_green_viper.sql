ALTER TABLE "messages" ADD PRIMARY KEY ("id");
ALTER TABLE "messages" ALTER COLUMN "id" SET NOT NULL;
ALTER TABLE "messages" ADD COLUMN "sender_id" uuid;
ALTER TABLE "messages" ADD COLUMN "receiver_id" uuid;