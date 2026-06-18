import { ContactSave } from "../../contact/application/save/contact-save";
import { PostgresContactRepository } from "../../contact/infrastructure/postgres-contact-repository";

const contactRepository = new PostgresContactRepository(process.env.DATABASE_URL || "");

export const ServiceContainer = {
  contact: {
    save: new ContactSave(contactRepository)
  }
}