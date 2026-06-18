import { Context } from "hono";
import { ServiceContainer } from "../../shared/infrastructure/ServiceContainer";
import { saveContactDto } from "./dtos/input/save-contact";

export default class ApiContactController {
  async save(c: Context) {

    try {
      const body = await c.req.json();

      const validContact = await saveContactDto.safeParseAsync(body);

      if (!validContact.success) throw new Error(validContact.error.message);

      const { name, email, company = null, phone = null, linkedin = null, message } = body;

      await ServiceContainer.contact.save.run(name, email, company, phone, linkedin, message);

      return c.json({ message: "Contact saved" }, 201);

    } catch (error) {
      console.error(error);
      return c.json({ message: "Error saving contact" }, 400);
    }
  }
}