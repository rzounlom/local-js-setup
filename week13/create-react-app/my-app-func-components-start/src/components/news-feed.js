import { Component } from "react";
import Post from "./post";

export default class NewsFeed extends Component {
  render() {
    return (
      <div className="container">
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}
