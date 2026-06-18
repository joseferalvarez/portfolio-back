export class ContactLinkedin {
  value: string | null;

  constructor(url: string | null = null) {
    this.value = url;
    this.urlIsValid();
  }

  private urlIsValid() {
    const regex = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9._%+-]+\/$/;

    if (this.value && !this.value.match(regex)) {
      throw new Error('Invalid linkedin format');
    }
  }
}