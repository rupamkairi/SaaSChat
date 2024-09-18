import z from "zod";

export const zResult = z.object({
  timestamp: z.number(),
  nonce: z.string(),
  action: z.string(),
  from: z.string().optional(),
  data: z.object({}).optional(),
});

export type Result = z.infer<typeof zResult>;
