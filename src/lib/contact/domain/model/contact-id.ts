export class ContactId {
  value: string;

  constructor(id: string) {
    this.value = id;
    this.idIsValid();
  }

  private idIsValid() {
    const regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-7[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    if (!this.value.match(regex)) {
      throw new Error('Invalid ID format');
    }
  }
}