import { ContactCompany } from "./contact-company";
import { ContactDate } from "./contact-date";
import { ContactEmail } from "./contact-email";
import { ContactId } from "./contact-id";
import { ContactLinkedin } from "./contact-linkedin";
import { ContactMessage } from "./contact-message";
import { ContactName } from "./contact-name";
import { ContactPhone } from "./contact-phone";

export class Contact {
  id: ContactId;
  name: ContactName;
  email: ContactEmail;
  company: ContactCompany;
  phone: ContactPhone;
  linkedin: ContactLinkedin;
  message: ContactMessage;

  createdAt: ContactDate;
  updatedAt: ContactDate;

  constructor(
    id: ContactId,
    name: ContactName,
    email: ContactEmail,
    company: ContactCompany,
    phone: ContactPhone,
    linkedin: ContactLinkedin,
    message: ContactMessage,
    createdAt: ContactDate,
    updatedAt: ContactDate
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.company = company;
    this.phone = phone;
    this.linkedin = linkedin;
    this.message = message;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}