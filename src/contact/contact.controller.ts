import { Database } from "../db/db";
import { contact } from "../db/schema/contact";
import { ContactDto } from "./dtos/contact";

const database = Database.getInstance();

export class Controller {
  async createContact(newContact: ContactDto) {
    const result = await database.db.insert(contact).values(newContact);

    if (!result) return null;
    return result;
  }
}
