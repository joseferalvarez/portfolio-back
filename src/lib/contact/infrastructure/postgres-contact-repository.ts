import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { Contact } from "../domain/model/contact";
import { ContactRepository } from "../domain/repository/contact-repository";
import { contactTable } from "../../shared/infrastructure/models/contact-table";

export class PostgresContactRepository implements ContactRepository {
  client: PostgresJsDatabase;

  constructor(databaseUrl: string) {
    this.client = drizzle(databaseUrl);
  }

  async save(contact: Contact): Promise<void> {
    await this.client.insert(contactTable).values({
      name: contact.name.value,
      email: contact.email.value,
      ...(contact.company.value && { company: contact.company.value }),
      ...(contact.phone.value && { phone: contact.phone.value }),
      ...(contact.linkedin.value && { linkedin: contact.linkedin.value }),
      message: contact.message.value,
      created_at: contact.createdAt.value,
      updated_at: contact.updatedAt.value
    });
  }
}