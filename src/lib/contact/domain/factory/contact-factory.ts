import { Contact } from "../model/contact";
import { ContactId } from "../model/contact-id";
import { ContactName } from "../model/contact-name";
import { ContactEmail } from "../model/contact-email";
import { ContactCompany } from "../model/contact-company";
import { ContactPhone } from "../model/contact-phone";
import { ContactLinkedin } from "../model/contact-linkedin";
import { ContactMessage } from "../model/contact-message";
import { ContactDate } from "../model/contact-date";

type FactoryContact = {
  id: string,
  name: string,
  email: string,
  company: string | null,
  phone: string | null,
  linkedin: string | null,
  message: string,
  date: Date
}

export class ContactFactory {
  static create({
    id,
    name,
    email,
    company,
    phone,
    linkedin,
    message,
    date
  }: FactoryContact): Contact {
    return new Contact(
      new ContactId(id),
      new ContactName(name),
      new ContactEmail(email),
      new ContactCompany(company),
      new ContactPhone(phone),
      new ContactLinkedin(linkedin),
      new ContactMessage(message),
      new ContactDate(date),
      new ContactDate(date)
    );
  }
}