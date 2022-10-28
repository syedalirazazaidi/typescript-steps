let stringArr = ["one", "hey", "Dave"];

let guitars = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];

stringArr[0] = "John";
stringArr.push("hey");

guitars[0] = 1984;
guitars.unshift("Jim");

let test = [];
let bands: string[] = [];
bands.push("32");

// Tuple
let myTuple: [string, number, boolean] = ["Dave", 42, true];

let mixed = ["John", 1, false];

myTuple[1] = 42;

// Objects
let myObj: [];
myObj = [];
// console.log(typeof myObj);
const cars = ["Saab", "Volvo", "BMW"];
console.log(typeof cars, "LLL");
// myObj = bands;
// myObj = {};

const exampleObj = {
  prop1: "Dave",
  prop2: true,
  prop3: 5,
};

exampleObj.prop3 = 43;

type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};
let jp: Guitarist = {
  name: "aliraza",
  active: true,
  albums: ["I", "II", "IV"],
};
const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`;
  }
  return "Hello!";
};

console.log(greetGuitarist(jp));
// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.D);

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
}
