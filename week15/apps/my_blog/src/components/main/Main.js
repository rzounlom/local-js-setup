import "./Main.scss";

import { Container } from "react-bootstrap";
import PostList from "../post-list/PostList";
import { posts } from "../../data/posts";

const NoPosts = () => (
  <div className="no-posts">
    <h3>No posts add yet, create a new one!</h3>
  </div>
);

export default function Main() {
  return (
    <main>
      <Container>
        {/* <PostList posts={posts} /> */}
        {posts.length > 0 ? <PostList posts={posts} /> : <NoPosts />}
      </Container>
    </main>
  );
}
