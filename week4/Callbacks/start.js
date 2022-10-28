//**Callback Functions */

/*callback: A callback function is a function passed into another function as an argument,
 which is then invoked inside the outer function to complete some kind of routine or action.*/

function printGreeting(name) {
  return console.log(`Hi, my name is ${name}! Nice to meet you!`);
}

function greeting(firstName = "John", lastName = "Doe", callback) {
  //this function takes in a 3 arguments: firstName, lastName, and a callback function
  const fullName = `${firstName} ${lastName}`;

  if (!callback) {
    //check for callback function
    return console.log(fullName);
  }

  return console.log(callback(fullName));
}

// greeting();
// greeting("Randy", "Watson", printGreeting);
