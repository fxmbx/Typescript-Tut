"use strict";
let greet = () => {
    console.log("first");
};
const add = (a, b, c) => {
    console.log(a + b);
};
add(5, 50);
const minus = (a, b) => {
    return a + b;
};
const logDetails = (user) => {
    console.log(user.name, user.uid);
};
logDetails({ name: "paul", uid: "2030121" });
const anchor = document.querySelector("a");
console.log(anchor.href);
const form = document.querySelector(".new-item-form"); //typecasting
console.log(form.children);
