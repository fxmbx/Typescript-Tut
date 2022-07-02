import { Invoice } from "./classes/invoice.js";

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(b: number): number;
}

var me: IsPerson = {
  name: "shawn",
  age: 34,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent: ", amount);
    return amount;
  },
};

me.speak("I am a d&d fan");
me.spend(9000);
console.log(me);

const greetPerson = (person: IsPerson) => {
  console.log("hello", person.name);
};

greetPerson(me);

let invoices: Invoice[] = [];

const invoice1 = new Invoice("John", "Macbook 2020", 1500);
const invoice2 = new Invoice("Skepta", "MBenz", 25000);
const invoice3 = new Invoice("Wizkid", "Apple watch", 500);

invoices.push(invoice1);
invoices.push(invoice2);
invoices.push(invoice3);

invoices.forEach((inv) => {
  console.log(inv.amount, inv.format());
});

const form = document.querySelector(".new-item-form") as HTMLFormElement; //typecasting

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.value);
});
