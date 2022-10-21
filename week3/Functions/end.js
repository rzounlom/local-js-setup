const { employees } = require("../data");

let myNumber = 10;
let myNumber2 = 25;

//create a function that prints all the numbers up to myNumber
const myNumberFunction = function (num = 5) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
};

// myNumberFunction(myNumber);

//filter through employees --> return only employees with Software Engineer in title
const myNewArr = employees.filter(function (employee) {
  return employee.title.match("Software Engineer");
});

console.log("myNewArr: ", myNewArr);
