var stringArr = ["one", "hey", "Dave"];
var guitars = ["Strat", "Les Paul", 5150];
var mixedData = ["EVH", 1984, true];
stringArr[0] = "John";
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
var test = [];
var bands = [];
bands.push("32");
// Tuple
var myTuple = ["Dave", 42, true];
var mixed = ["John", 1, false];
myTuple[1] = 42;
// Objects
var myObj;
myObj = [];
// console.log(typeof myObj);
var cars = ["Saab", "Volvo", "BMW"];
console.log(typeof cars, "LLL");
// myObj = bands;
// myObj = {};
var exampleObj = {
    prop1: "Dave",
    prop2: true,
    prop3: 5
};
exampleObj.prop3 = 43;
var evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"]
};
var jp = {
    name: "aliraza",
    active: true,
    albums: ["I", "II", "IV"]
};
var greetGuitarist = function (guitarist) {
    if (guitarist.name) {
        return "Hello ".concat(guitarist.name.toUpperCase(), "!");
    }
    return "Hello!";
};
console.log(greetGuitarist(jp));
// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.D);
