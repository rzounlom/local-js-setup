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
