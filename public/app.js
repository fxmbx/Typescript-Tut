import { Invoice } from "./classes/invoice.js";
let invoices = [];
const invoice1 = new Invoice("John", "Macbook 2020", 1500);
const invoice2 = new Invoice("Skepta", "MBenz", 25000);
const invoice3 = new Invoice("Wizkid", "Apple watch", 500);
invoices.push(invoice1);
invoices.push(invoice2);
invoices.push(invoice3);
invoices.forEach((inv) => {
    console.log(inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form"); //typecasting
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
