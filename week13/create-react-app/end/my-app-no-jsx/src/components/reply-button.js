import { Component, createElement } from "react";

export default class ReplyButton extends Component {
  render() {
    return createElement("button", { className: "btn btn-primary" }, "Reply");
  }
}
