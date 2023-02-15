import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

import Counter from "../components/counter/Counter";
import React from "react";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div className="app">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Counter />
    </div>
  );
}
