const axios = require("axios");

/** Handling Errors/Promises */
/* The Promise object represents the eventual completion (or failure) of an 
asynchronous operation and its resulting value. */
const myPromise = () => {
  axios
    .get("http:localhost:5000")
    .then((data) => console.log(data))
    .catch((err) => console.log(err.message));
};

myPromise();

const getUsers = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((data) => console.log(data))
    .catch((err) => console.log(err.message));
};

// console.log(getUsers());

const getUsersError = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/todo")
    .then((data) => console.log(data))
    .catch((err) => console.log(err.message));
};

// console.log(getUsersError());

const getUserById = (id = 1) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((data) => console.log(data))
    .catch((err) => console.log(err.message));
};

// console.log(getUserById(5)); //should return user with id 1 as default
// console.log(getUserById(5));//should return user with id 4

//async await
const getUsersAsyncAwait = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(response);
  } catch (error) {
    throw new Error(error.message);
  }
};


console.log(getUsersAsyncAwait());

//async await error case
const getUsersAsyncAwaitError = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todo"
    );
    console.log(response);
  } catch (error) {
    throw new Error(error.message);
  }
};

// console.log(getUsersAsyncAwaitError());

//**try catch finally example */

function get() {
  try {
    console.log("Inside try");
    throw new Error("Return error");
    return 10;
  } catch (e) {
    console.log("Inside catch");
    return 20;
  } finally {
    console.log("Inside finally");
    return 30;
  }

  console.log("Outside try...catch...finally");
  return 40;
}

// console.log("The value is ", get());
