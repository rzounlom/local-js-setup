import { Post } from "./post";
import { useState } from "react";

const NewsFeed = () => {
  const [myTitle, setMyTitle] = useState("My Cool Post");

  return (
    <div>
      <Post title={myTitle} setMyTitle={setMyTitle} />
      <Post title={myTitle} setMyTitle={setMyTitle} />
      <Post title={myTitle} setMyTitle={setMyTitle} />
    </div>
  );
};

export default NewsFeed;
