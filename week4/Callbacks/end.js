//**Callback Functions */

/*callback: A callback function is a function passed into another function as an argument,
 which is then invoked inside the outer function to complete some kind of routine or action.*/

function printGreeting() {
  return console.log(`Hi, my name is Jim Nice to meet you!`);
}

function greeting(firstName = "John", lastName = "Doe", callback) {
  //this function takes in a 3 arguments: firstName, lastName, and a callback function
  const fullName = `${firstName} ${lastName}`;

  if (!callback) {
    //check for callback function
    return console.log(fullName);
  }

  return console.log(callback());
}

// greeting("Jane", "Doe", printGreeting);
// greeting("Randy", "Watson", printGreeting);

/**Exercise: using a callback function, return the sum of an array myNums */
const myNums = [5, 4, 3, 2, 1];
const myNums2 = [510, 1, 1, 2, 1];

const addNumbers = (a, b) => a + b;
const subtractNumbers = (a, b) => a - b;

const sumNumber = (arr = [], func) => {
  //create variable to hold my sum
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = func(sum, arr[i]);
  }

  return sum;
};

console.log(sumNumber(myNums, addNumbers));
console.log(sumNumber(myNums2, subtractNumbers));
