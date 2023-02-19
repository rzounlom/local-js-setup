import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

import Counter from "./components/Counter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <Counter />
    </div>
  );
}

export default App;
