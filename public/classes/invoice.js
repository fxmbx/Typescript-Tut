export class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.amount = a;
        this.details = d;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
