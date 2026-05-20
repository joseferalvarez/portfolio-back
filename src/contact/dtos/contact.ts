import z from "zod";

export const ContactDto = z.object({
  name: z.string(),
  email: z.email(),
  company: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  linkedin: z.url().optional().nullable(),
  message: z.string(),
});

export type ContactDto = z.infer<typeof ContactDto>;
