import Comment from "./comment";
import { Component } from "react";
import LikeButton from "./like-button";
import ReplyButton from "./reply-button";

export default class Post extends Component {
  render() {
    const myVar = "test";
    return (
      <div className="card w-75">
        <div className="card-header bg-success text-white">
          Username and Time
        </div>
        <div className="card-body">Post Content</div>
        <div className="card-footer">
          <div>
            <LikeButton />
            <span> </span>
            <ReplyButton />
            <Comment />
            <Comment myVar={myVar} />
          </div>
        </div>
      </div>
    );
  }
}
