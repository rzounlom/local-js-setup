import React from "react";
import ReactDOM from "react-dom";

let element = React.createElement("h1", {}, "This is React");
ReactDOM.render(element, document.getElementById("app"));
