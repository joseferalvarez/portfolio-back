export class ContactCompany {
  value: string | null;

  constructor(company: string | null = null) {
    this.value = company;
    this.companyIsValid();
  }

  private companyIsValid() {
    const regex = /^[\p{L}\d]{3,49}$/u;

    if (this.value && !this.value.match(regex)) {
      throw new Error('Invalid company format');
    }
  }
}