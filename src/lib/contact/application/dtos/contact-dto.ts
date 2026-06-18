import z from "zod";

export const contactDto = z.object({
  id: z.uuidv7(),
  name: z.string(),
  email: z.string(),
  company: z.string().nullable(),
  phone: z.string().nullable(),
  linkedin: z.url().nullable(),
  message: z.string(),
  date: z.date()
});

export type ContactDto = z.infer<typeof contactDto>;