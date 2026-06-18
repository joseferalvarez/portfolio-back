import z from "zod";

export const saveContactDto = z.object({
  name: z.string(),
  email: z.string(),
  company: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  linkedin: z.url().optional().nullable(),
  message: z.string(),
});