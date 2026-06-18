export class ContactMessage {
  value: string;

  constructor(message: string) {
    this.value = message;
    this.messageIsValid();
  }

  private messageIsValid() {
    const regex = /^[\p{L}\d\s.,;:!?]{10,2000}$/u;

    if (this.value && !this.value.match(regex)) {
      throw new Error('Invalid message format');
    }
  }
}