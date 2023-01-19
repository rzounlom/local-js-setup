import $ from "jquery";

export default class Person {
  constructor(fistName, lastName) {
    this.fistName = fistName;
    this.lastName = lastName;
  }

  display(elementId) {
    $(`#${elementId}`).text(`${this.fistName} ${this.lastName}`);
  }
}
