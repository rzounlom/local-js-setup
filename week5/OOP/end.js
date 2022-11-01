//**Object-Oriented Programming OOP */

class Employee {
  constructor(firstName, lastName, title, experience) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.title = title),
      (this.experience = experience),
      (this.role = role);
  }

  employeeDescription() {
    console.log(
      `${this.firstName} ${this.lastName} is a ${this.title} with ${this.experience} years of experience`
    );
  }
}

class User extends Employee {
  constructor(role = "USER") {
    super();
  }
}

const employee1 = new Employee("John", "Doe", "Software Engineer", 7);

console.log(employee1);
