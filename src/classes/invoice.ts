export class Invoice {
  readonly client: string;
  private details: string;
  public amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.amount = a;
    this.details = d;
  }

  format(): string {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
