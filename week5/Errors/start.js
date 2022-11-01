const axios = require("axios");

/** Promises */
/* The Promise object represents the eventual completion (or failure) of an 
asynchronous operation and its resulting value. */
const myPromise = () => {
  const data = axios
    .get("http:localhost:5000")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

// myPromise();

//async await
const myAsyncFunction = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

// console.log(myAsyncFunction());

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

console.log("The value is ", get());
