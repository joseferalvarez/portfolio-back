export class ContactEmail {
  value: string;

  constructor(email: string) {
    this.value = email;
    this.emailIsValid();
  }

  private emailIsValid() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!this.value.match(regex)) {
      throw new Error('Invalid email format');
    }
  }
}