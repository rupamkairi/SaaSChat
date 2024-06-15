import z from "zod";

export const zMessage = z.object({
  nonce: z.string(),
  timestamp: z.number(),
  action: z.string(),
  from: z.string().optional()
});
