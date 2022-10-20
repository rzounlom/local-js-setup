//**Arrays: allow us to store values in an indexed list (starting at 0). We can store anything in an array(objects, lists, functions, numbers...) */

//devine an array
const myArrWrapper = new Array(); //using the new keyword to use an array class;
const myArr = []; //array literal syntax

//**Comon Array methods */
const arrayMethodsArr = [
  1,
  2,
  false,
  true,
  "blue",
  "black",
  { id: 1, name: "John", ocupation: "Software Engineer", yrOfexp: 5 },
];

console.log("default arrayMethodsArr: ", arrayMethodsArr);

//Array.push(): adds one or more elements to the end of an array and returns the new length of the array.
const newPushArrLength = arrayMethodsArr.push(100); //--> add the value 100 to end of the arryMethodsArr
// console.log("newPushArrLength: ", newPushArrLength);
// console.log("Array.push(): ", arrayMethodsArr);

//Array.pop(): removes the last element in an array, and returns the element, which can be stored in a variable
const poppedVar = arrayMethodsArr.pop(); //--> remove the last element in arryMethodsArr
// console.log("poppedVar: ", poppedVar);
// console.log("Array.pop(): ", arrayMethodsArr);

//Array.shift(): method removes the first element from an array and returns that removed element.
const shiftedVar = arrayMethodsArr.shift(); //--> remove the first element in arryMethodsArr
// console.log("shiftedVar: ", shiftedVar);
// console.log("Array.shift(): ", arrayMethodsArr);

//Array.unshift(): adds one or more elements to the beginning of an array and returns the new length of the array.
const ushiftedArrayLength = arrayMethodsArr.unshift("cool beans", 8000, false); //--> remove the first element in arryMethodsArr
// console.log("ushiftedArrayLength: ", ushiftedArrayLength);
// console.log("Array.unshift(): ", arrayMethodsArr);

//Array.indexOf(): returns the first index at which a given element can be found in the array, or -1 if it is not present.
const myIndexOfVar = arrayMethodsArr.indexOf(true);
// console.log("arrayMethodsArr: ", arrayMethodsArr);
// console.log("myIndexOfVar: ", myIndexOfVar);

//Array.includes(): determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const myIncludedVar = arrayMethodsArr.includes(true);
// console.log("arrayMethodsArr: ", arrayMethodsArr);
// console.log("myIncludedVar: ", myIncludedVar);

//Array.slice(): returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// console.log("arrayMethodsArr: ", arrayMethodsArr);
const sliceCopy3 = arrayMethodsArr.slice(3);
// console.log("arrayMethodsArr.slice(3): ", sliceCopy3);
const sliceCopy35 = arrayMethodsArr.slice(3, 5);
// console.log("arrayMethodsArr.slice(3,5): ", sliceCopy35);
// console.log("arrayMethodsArr: ", arrayMethodsArr);

//Array.splice(): changes the contents of an array by removing or replacing existing elements and/or adding new element
//first parameter is the startInded, second parameter is how many values you want to remove, third parameter is the replacement value(optional)
// console.log("arrayMethodsArr: ", arrayMethodsArr);
//remove elemets after a certian index
const mySplicedVars1 = arrayMethodsArr.splice(9); // removes all elements after the 9th index of array
// console.log("arrayMethodsArr: ", arrayMethodsArr);
// console.log("mySplicedVars1: ", mySplicedVars1);

const mySplicedVar2 = arrayMethodsArr.splice(3, 1); // removes 1 element starting at the 3 index of the array
// console.log("arrayMethodsArr: ", arrayMethodsArr);
// console.log("mySplicedVar2: ", mySplicedVar2);

const mySplicedVars3 = arrayMethodsArr.splice(3, 1, "I was replaced here"); // removes 1 element starting at the 3 index of the array and replaces it the new value
// console.log("arrayMethodsArr: ", arrayMethodsArr);
// console.log("mySplicedVars3: ", mySplicedVars3);

//Array.concat(): combines two arrays togther into one array
const myConcatArr1 = [1, 2, 3];
const myConcatArr2 = [4, 5, 6];

const concatArrays = myConcatArr1.concat(myConcatArr2);

// console.log("concatArrays: ", concatArrays);

//**Common Array iterator helper methods that make our lives easier!*/

//Array.forEach()

//Array.map()

//Array.find()

//Array.filter()

//Array.reduce()

//Array.every()

//Array.some()
