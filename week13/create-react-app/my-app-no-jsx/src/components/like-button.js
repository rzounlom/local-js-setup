import { Component, createElement } from "react";

export default class LikeButton extends Component {
  render() {
    return createElement("button", { className: "btn btn-primary" }, "Like");
  }
}
