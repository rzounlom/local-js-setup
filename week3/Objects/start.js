//importing test data
const { employees, nflTeams, myDog } = require("../data");

//**Objects: allow us to store data as key/value pairs for easy access when needed*/

//devine an object
const myObjectWrapper = new Object(); //using the new keyword to create a new Object based off the Object class;
const myObj = { id: 1, name: "Romaric" }; //array literal syntax

//** Accessing data in objects*/

//dot notation
// console.log("myDog.bark dot: ", myDog.bark); // log the bark of the dog using dot notation

//bracket notation
// console.log("myDog.bark bracket: ", myDog["bark"]); // log the bark of the dog using bracket notation

//**Adding/updating data in objects*/
//updating values using dot notation
let toy;
let favoriteSnack = "favoriteSnack";
myDog.bark = "soft"; //update the bark from loud to soft
myDog["bark"] = "medium";
myDog[favoriteSnack] = favoriteSnack;
console.log(myDog);

//updating values using bracket notation
myDog["name"] = "Mufasa"; //update the bark from loud to soft
// console.log(myDog);

//adding values using dot notation
myDog.owner = "John"; //update the bark from loud to soft
// console.log(myDog);
myDog.toy = toy;
// console.log(myDog);

//adding values using bracket notation
myDog["color"] = "brown"; //update the bark from loud to soft
// console.log(myDog);

//Object.keays: stores keys of an object in an array
console.log(Object.keys(myDog));

//Object.hasOwnProperty: searches an object for a key... returns a boolean
console.log(myDog.hasOwnProperty("eye color"));
