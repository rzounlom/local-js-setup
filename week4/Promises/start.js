const axios = require("axios");

/** Promises */
/* The Promise object represents the eventual completion (or failure) of an 
asynchronous operation and its resulting value. */
const myPromise = () => {
  const data = axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((data) => console.log(data))
    .catch((err) => console.log("Something wen wrong", err));
};

// myPromise();
