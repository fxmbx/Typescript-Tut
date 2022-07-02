class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.amount = a;
    this.details = d;
  }

  format(): string {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invoice1 = new Invoice("John", "Macbook 2020", 1500);
console.log(invoice1.format());

const form = document.querySelector(".new-item-form") as HTMLFormElement; //typecasting

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.value);
});
