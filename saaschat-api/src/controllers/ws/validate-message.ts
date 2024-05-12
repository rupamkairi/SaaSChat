import z from "zod";

export const zMessage = z.object({
  event: z.string(z.enum(["message_send", "message_receive"])),
  data: z.object({}),
});
