"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.amount = a;
        this.details = d;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invoice1 = new Invoice("John", "Macbook 2020", 1500);
console.log(invoice1.format());
const form = document.querySelector(".new-item-form"); //typecasting
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
