import { randomUUIDv7 } from "bun";
import { ContactRepository } from "../../domain/repository/contact-repository";
import { ContactFactory } from "../../domain/factory/contact-factory";
import { contactDto } from "../dtos/contact-dto";

export class ContactSave {
  constructor(private repository: ContactRepository) { }

  async run(
    name: string,
    email: string,
    company: string | null = null,
    phone: string | null = null,
    linkedin: string | null = null,
    message: string,
  ): Promise<void> {

    const id = randomUUIDv7();
    const date = new Date();

    const contact = { id, name, email, company, phone, linkedin, message, date };
    const contactIsValid = await contactDto.safeParseAsync(contact);

    if (!contactIsValid.success) throw new Error(contactIsValid.error.message);

    return this.repository.save(ContactFactory.create(contactIsValid.data));
  }
}