import { Hono } from "hono";
import { Controller } from "./contact.controller";
import { ContactDto } from "./dtos/contact";

const apiContact = new Hono();
const controller = new Controller();

apiContact.post("", async (c) => {
  const body = await c.req.json();
  const validResult = await ContactDto.safeParseAsync(body);

  if (!validResult.success) return c.json(validResult.error, 400);

  const result = await controller.createContact(validResult.data);

  if (!result) return c.json({ message: "Error creating contact" }, 400);
  return c.json({ message: "Contact created succesfully" }, 201);
});

export default apiContact;
