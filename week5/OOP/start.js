//**Object-Oriented Programming OOP */

class Employee {
  constructor(firstName, lastName, title, experience) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.title = title),
      (this.experience = experience);
  }

  employeeDescription() {
    console.log(
      `${this.firstName} ${this.lastName} is a ${this.title} with ${this.experience} years of experience`
    );
  }
}

class User extends Employee {
  //User is created from the Employee type, inherits all Empoloyee properties.methods but can add its own
  constructor(
    firstName,
    lastName,
    title,
    experience,
    role = "USER",
    loggedIn = false
  ) {
    super(firstName, lastName, title, experience);
    this.role = role;
    this.loggedin = loggedIn;
  }
}

class Dog {
  constructor(breed, temperament, bark, favoriteFood) {
    (this.breed = breed),
      (this.temperament = temperament),
      (this.bark = bark),
      (this.favoriteFood = favoriteFood);
  }
}

const fido = new Dog("Fido", "German Shepherd", "loud", "steak");

const john = new Employee("John", "Doe", "Software Engineer", 7);
// console.log(John);
// console.log(John.employeeDescription());
const jane = new Employee("Jane", "Doe", "Software Engineer", 10);
// console.log(Jane);
// console.log(Jane.employeeDescription());

//creating a new user
const ronald = new User("Ronald", "Smith", "Product Manager", 8);

const sarah = new User("Sarah", "Johnson", "CEO", 15, "ADMIN");

// console.log(john);
// console.log(jane);

// console.log(ronald);
// console.log(sarah);

//**Inheritance Example */
//the users Ronald and Sarah have access to the employeeDescription method on the Employee class (inheritance) since the User class was based off the Employee class
// console.log(ronald.employeeDescription());
// console.log(sarah.employeeDescription());

//**Checking the instance of an object */
// use the instanceof operator to check if Ronald is in instance of User or Employee
// console.log(ronald instanceof User);
// console.log(jane instanceof User);
// console.log(jane instanceof Dog);
// console.log(fido instanceof Dog);
// console.log(fido instanceof Employee);

//**Exercise** */ NOTE: This is meant to be hard/test you knowledge!
//1. write a function that takes in an object as an argument and returns true if the object is instance of an Employee or false if not.

//2. write a function called privilgedAccess which takes in an object and a secret(default = "my dirty little secret") as arguments and ruturns the sercret to ADMIN Users
//2a: If the object is not an Employee or a User, return an error with the following message: "Please check the type of your object and try again"
//2b: If the object does not have a role(we can assume that it is an Employee), then return an error with the following message: "No User found for Employee <firstName> <lastName>"
//2c: If the object has a USER role, then return an error with the following message: "Only ADMIN users have access to secrets"
//2d: If the object has a ADMIN role, then return the sercret
//2e: Return the error: "Something went wrong, please try again later" for all other cases

//Hints:
//1. consider using a switch statement over if/else; switch on true
//2. returning errors; return new Error("yourError")

//test scenarios
// console.log(privilgedAccess(fido)); //should return the error: "Please check the type of your object and try again"
// console.log(privilgedAccess(jane)); //should return the error: "No User found for Employee Jane Doe"
// console.log(privilgedAccess(ronald)); //should return the error: "No User found for Employee Jane Doe"
// console.log(privilgedAccess(sarah)); //should return the secret passed into the function or the default secret
