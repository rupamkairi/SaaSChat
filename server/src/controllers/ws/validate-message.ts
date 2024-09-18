import z from "zod";

export const zMessage = z.object({
  timestamp: z.number(),
  nonce: z.string(),
  action: z.string(),
  from: z.string().optional(),
  data: z
    .object({
      chat_id: z.union([z.number(), z.string()]).optional(),
      user_id: z.union([z.number(), z.string()]).optional(),
      content: z.any(),
    })
    .optional(),
});

export type Message = z.infer<typeof zMessage>;
export type MessageData = typeof zMessage._output.data;
