import "./Main.scss";

import { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import PostList from "../post-list/PostList";
import axios from "axios";

// import { posts } from "../../data/posts";

const NoPosts = () => (
  <div className="no-posts">
    <h3>No posts add yet, create a new one!</h3>
  </div>
);

export default function Main({ posts, getPosts }) {
  return (
    <main>
      <Container>
        {posts.length > 0 ? (
          <PostList posts={posts} getPosts={getPosts} />
        ) : (
          <NoPosts />
        )}
      </Container>
    </main>
  );
}
