import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement; //typecasting

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//list template instace
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
});

//GENERICS

// const addUID = <T extends object>(obj: T) => {
const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 1000);
  return { ...obj, uid };
};

let docOne = addUID({ name: "yoshi", age: 90 });
// let docTwo = addUID("jello");
// console.log(docTwo);
console.log(docOne);

//with inerfaces
interface Resource<T> {
  uid: number;
  resourcesName: string;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1,
  resourcesName: "person",
  data: { message: "data string" },
};

const docFour: Resource<string[]> = {
  uid: 1,
  resourcesName: "person",
  data: ["he", "hello"],
};

console.log(docThree, docFour);
