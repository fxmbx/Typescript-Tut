let names: string[];

names = ["jed", "tunde", "israel"];
// names.push(1)
names.push("Janet");

let arry: (string | number)[] = [];
arry.push(9);
arry.push("hello");
console.log(arry);

let obj: object = {
  name: "obj-name",
  age: 20,
  occupation: "jobless",
};
console.log(obj);

let age: any = 25;
age = true;
console.log(age);

let confused: { name: any; age: any };

confused = { name: 1, age: "25" };
console.log(confused);
