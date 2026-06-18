export class ContactPhone {
  value: string | null;

  constructor(phone: string | null = null) {
    this.value = phone;
    this.phoneIsValid();
  }

  private phoneIsValid() {
    const regex = /^\+[1-9]\d{1,14}$/;
    if (this.value && !this.value.match(regex)) {
      throw new Error('Invalid phone format');
    }
  }
}