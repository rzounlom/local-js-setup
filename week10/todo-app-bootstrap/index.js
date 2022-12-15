//store id in variable
let id = 0;

//get id of button and add click event callback function
document.getElementById("add").addEventListener("click", () => {
  //get current date(today)
  let createdDate = new Date();
  //get reference to table to add data
  let table = document.getElementById("list");
  // console.log("TABLE", table);
  //get reference to the row to add new data: since the th is 0, we want to add new rows starting at 1
  let row = table.insertRow(1);
  //add an id to the new row and set it to the current id variable above
  row.setAttribute("id", `item-${id}`);
  //get reference to task and date inputs
  let taskInput = document.getElementById("new-task");
  let startDateInput = document.getElementById("new-start-date");
  let endDateInput = document.getElementById("new-end-date");
  // console.log({ taskInput, startDateInput, endDateInput });
  //alert and return out of the function if not all inputs have values are filled out
  const inputsValidated =
    taskInput.value && startDateInput.value && endDateInput.value;
  if (!inputsValidated) {
    alert(`Error creating a note. Please make sure:
    • A Start Date is provided
    • A Start Date is provided
    • A Todo is provided
    `);
    return;
  }
  //set task equal to the text entered into the task input
  row.insertCell(0).innerHTML = taskInput.value;
  //set Date Created cell to createdDate variable above with date formatting: YYYY/MM/DD
  row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${
    createdDate.getMonth() + 1
  }-${createdDate.getDate()}`;
  //set Start Date cell to Start Date date picker
  row.insertCell(2).innerHTML = startDateInput.value;
  //set End Date cell to End Date date picker
  row.insertCell(2).innerHTML = endDateInput.value;
  //add buttons(actions) to Actions cell
  let actions = row.insertCell(4);
  actions.appendChild(createDeleteButton(id++));
  //reset the task and date input values to blak text
  taskInput.value = "";
  startDateInput.value = "";
  endDateInput.value = "";
});

const createDeleteButton = (id) => {
  //create new button to return
  const btn = document.createElement("button");
  //add bootstrap class to button
  btn.className = "btn btn-danger";
  //add id to button
  btn.id = id;
  //add text to button
  btn.innerHTML = `Delete`;
  //add click handler to button for delete action
  btn.onclick = () => {
    console.log(`Deleting row with id: item-${id}`);
    //get reference to row we want to delete
    const elementToDelete = document.getElementById(`item-${id}`);
    //remove child from parent node
    elementToDelete.parentNode.removeChild(elementToDelete);
  };
  //return button
  return btn;
};
