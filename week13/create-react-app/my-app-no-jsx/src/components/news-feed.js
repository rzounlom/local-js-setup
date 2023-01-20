import React, { Component, createElement } from "react";

import Post from "./post";
import TestComponent from "./test";

let e = createElement;

export default class NewsFeed extends Component {
  render() {
    return e(
      "div",
      { className: "container" },
      e(Post, {}, null),
      e(Post, {}, null),
      e(Post, {}, null),
      e(TestComponent, {}, null)
    );
  }
}
