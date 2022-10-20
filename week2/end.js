//**JavaScript Loops/Conditionals Extended */

//Boolean Logic

//Example 1:
// Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console.
// 2 == "2";
// 2 === 2;
// 10 % 3;
// 10 % 3 === 1;
// true && false;
// false || true;
// true || false;

//Example 2:
let isSunny = true,
  isRainy = false;

// isSunny = true;
// isRainy = false;

// isSunny = true;
// isRainy = true;

// isSunny = false;
// isRainy = true;

// isSunny = false;
// isRainy = true;

isSunny = false;
isRainy = false;

//If we have two variables isSunny and isRainy, and this expression:
// console.log("boolean Answer:: ", (isSunny && isRainy) || !isSunny);

//if statements
//Difference between value and !value

let isLearning = true;
// if (isLearning) {
//   console.log("Keep it up!");
// } else {
//   console.log("Pretty sure you are learning....");
// }

// What should the above code console.log?
// Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?

// if (!isLearning) {
//   console.log("Keep it up!");
// } else {
//   console.log("Pretty sure you are learning....");
// }

// What should the above code console.log?

let firstvariable;
let secondvariable = "";
let thirdvariable = 1;
let secretMessage = "Shh!";

// if (firstvariable) {
//   console.log("first");
// } else if (firstvariable || secondvariable) {
//   console.log("second");
// } else if (firstvariable || thirdvariable) {
//   console.log("third");
// } else {
//   console.log("fourth");
// }

// What should the above code console.log? Why?
// What is the value of firstvariable when it is initialized?
// Is the value of firstvariable a "truthy" value? Why?
// Is the value of secondvariable a "truthy" value? Why?
// Is the value of thirdvariable a "truthy" value? Why?

//**Comparison operators */
//>, <, <=,>=,===,!==

//** Switch statements */

let num2 = 5;
// switch (num2) {
//   case 0:
//     console.log("Number is 0");
//     break;
//   case 10:
//     console.log("Number is 10");
//     break;
//   case 100:
//     console.log("Number is 100");
//     break;
//   default:
//     console.log("I don't know the number");
// }

let num1 = 5;
// switch (true) {
//     case (num1 < 5):
//         console.log("Number is very low");
//         break;
//     case (num1 < 10):
//         console.log("Number is low");
//         break;
//     case (num1 > 100):
//         console.log("Number is high");
//         break;
//     default:
//         console.log("Number is medium")
// }

// Make sure to set the Break statement whenever your case doese not return anything
let num4 = 100;
// switch (num4) {
//   case 0:
//   case 5:
//   case 6:
//     console.log("Number is low");
//     break;
//   case 100:
//     console.log("Number is high");
//   default:
//     console.log("I don't know the number");
// }

//** Loops */

//for loop: most common

for (let counter = 0; counter < 4; counter++) {
  // console.log(counter);
}

//Exercise: use a for loop to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  // console.log(i);
}
//Exercise: use a for loop to print numbers from 1 to 10 that are divisible by 2
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}
true;
false;
//Exercise: FizzBuzz: if the number is divisible by 3 print Fizz, if the number is divisible by 5 print Buzz, if the number is divisible by 5 and 3,print FizzBuzz, else print the number
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

//Exercise: use a for loop to print numbers from 1 to 10 that are divisible by 3

//while loop:
// A while loop that prints 1, 2, and 3
let counterTwo = 5;
// while (counterTwo < 4) {
//   console.log("while loop counterTwo", counterTwo);
//   counterTwo++;
// }

//do while loop: note the do while will always run at least once
let countString = "";
let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i < 4);
