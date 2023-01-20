import Comment from "./comment";
import LikeButton from "./like-button";
import ReplyButton from "./reply-button";

export const Post = function ({ title, setMyTitle }) {
  const testTitle = "Test TITLE";
  return (
    <div className="card w-75">
      <div className="card-header bg-success text-white">Username and Time</div>
      <div className="card-body">Post Content: {title}</div>
      <div className="card-footer">
        <div>
          <LikeButton />
          <span> </span>
          <ReplyButton />
          <Comment />
          <Comment />
          <button onClick={() => setMyTitle(testTitle)}>TEST</button>
        </div>
      </div>
    </div>
  );
};
