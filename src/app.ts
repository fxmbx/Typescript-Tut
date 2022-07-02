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

//TUPLES - specify the type that is expected in position of array using tuple
let tup: [string, boolean, number] = ["Jhus", true, 450];

//ENUMS
enum ResourceType {
  BOOK = 1,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

//GENERICS

// const addUID = <T extends { name: string }>(obj: T) => {
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 1000);
  return { ...obj, uid };
};

let docOne = addUID({ name: "yoshi", age: 90 });
console.log(docOne);

interface Resource<T> {
  uid: number;
  resourcesName: ResourceType;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1,
  resourcesName: ResourceType.BOOK,
  data: { message: "data string" },
};

const docFour: Resource<string[]> = {
  uid: 1,
  resourcesName: ResourceType.FILM,
  data: ["he", "hello"],
};

console.log(docThree, docFour);
