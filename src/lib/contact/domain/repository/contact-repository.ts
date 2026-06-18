import { Contact } from "../model/contact";

export interface ContactRepository {
  save(contact: Contact): Promise<void>;
}