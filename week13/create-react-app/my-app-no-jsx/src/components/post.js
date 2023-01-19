import { Component, createElement } from "react";

import Comment from "./comment";
import LikeButton from "./like-button";
import ReplyButton from "./reply-button";

let e = createElement;

export default class Post extends Component {
  render() {
    return e(
      "div",
      { className: "card w-75" },
      e(
        "div",
        { className: "card-header bg-success text-white" },
        "Username and Time"
      ),
      e("div", { className: "card-body" }, "Post Content"),
      e(
        "div",
        { className: "card-footer" },
        e(LikeButton, {}, null),
        e("span", {}, " "),
        e(ReplyButton, {}, null),
        e(Comment, {}, null),
        e(Comment, {}, null)
      )
    );
  }
}
