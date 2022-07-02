let greet: Function = () => {
  console.log("first");
};

const add = (a: number, b: number, c?: number | string): void => {
  console.log(a + b);
};

add(5, 50);

const minus = (a: number, b: number): number => {
  return a + b;
};

type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };
const logDetails = (user: objWithName) => {
  console.log(user.name, user.uid);
};

logDetails({ name: "paul", uid: "2030121" });

const anchor: HTMLAnchorElement = document.querySelector("a")!;

console.log(anchor.href);

// const form = document.querySelector(".new-item-form") as HTMLFormElement; //typecasting

console.log(form.children);
