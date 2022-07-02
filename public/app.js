import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form"); //typecasting
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template instace
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
//TUPLES - specify the type that is expected in position of array using tuple
let tup = ["Jhus", true, 450];
//ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 1] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 2] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 3] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 4] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 5] = "PERSON";
})(ResourceType || (ResourceType = {}));
//GENERICS
// const addUID = <T extends { name: string }>(obj: T) => {
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "yoshi", age: 90 });
console.log(docOne);
const docThree = {
    uid: 1,
    resourcesName: ResourceType.BOOK,
    data: { message: "data string" },
};
const docFour = {
    uid: 1,
    resourcesName: ResourceType.FILM,
    data: ["he", "hello"],
};
console.log(docThree, docFour);
