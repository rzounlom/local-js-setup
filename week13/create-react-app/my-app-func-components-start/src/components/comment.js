import LikeButton from "./like-button";
import ReplyButton from "./reply-button";

export default function Comment() {
  return (
    <div className="card w-75">
      <div className="card-header bg-success text-white">Username and Time</div>
      <div className="card-body">Comment Content</div>
      <div className="card-footer">
        <div>
          <LikeButton />
          <span> </span>
          <ReplyButton />
        </div>
      </div>
    </div>
  );
}
