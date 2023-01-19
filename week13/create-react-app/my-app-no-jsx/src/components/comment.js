import { Component, createElement } from "react";

import LikeButton from "./like-button";
import ReplyButton from "./reply-button";

let e = createElement;

export default class Comment extends Component {
  render() {
    return e(
      "div",
      { className: "card w-75" },
      e(
        "div",
        { className: "card-header bg-success text-white" },
        "Username and Time"
      ),
      e("div", { className: "card-body" }, "Comment Content"),
      e(
        "div",
        { className: "card-footer" },
        e(LikeButton, {}, null),
        e("span", {}, " "),
        e(ReplyButton, {}, null)
      )
    );
  }
}
