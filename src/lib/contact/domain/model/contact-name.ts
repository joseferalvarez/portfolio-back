export class ContactName {
  value: string;

  constructor(name: string) {
    this.value = name;
    this.nameIsValid();
  }

  private nameIsValid() {
    const regex = /^[\p{L} ]{3,49}$/u;
    if (!this.value.match(regex)) {
      throw new Error('Invalid name format');
    }
  }
}