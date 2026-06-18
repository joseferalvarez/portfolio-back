export class ContactDate {
  value: Date;

  constructor(date: Date = new Date()) {
    this.value = date;
    this.dateIsValid();
  }

  private dateIsValid() {
    if (!this.value) {
      throw new Error("Date is required");
    }

    if (this.value > new Date()) {
      throw new Error("Date cannot be in the future");
    }
  }
}