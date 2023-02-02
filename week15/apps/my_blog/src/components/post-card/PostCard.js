import "./PostCard.scss";

import { Button, Card, Image } from "react-bootstrap";

import EditPost from "../modals/EditPost";
import { useState } from "react";

export default function PostCard({ post, getPosts }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  return (
    <div className="post-card">
      <EditPost
        show={show}
        getPosts={getPosts}
        handleClose={handleClose}
        currentPost={post}
      />
      <Card>
        <Card.Img variant="top" src={post.imgUrl} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle>{post.subtitle}</Card.Subtitle>
          <div className="post-text">
            <Card.Text>{post.post}</Card.Text>
          </div>
        </Card.Body>
        <Card.Footer>
          <div className="post-description">
            <Image src={post.avatar} thumbnail />
            <div className="post-details">
              <div className="post-author">
                <span>Author:</span> {post.author}
              </div>
              <div className="post-date">
                <span>Date Posted:</span> Mon Jan 25, 2023
              </div>
            </div>
            <div className="post-actions">
              <Button variant="primary" onClick={handleOpen}>
                Edit
              </Button>
              <Button variant="danger">Delete</Button>
            </div>
          </div>

          <Card.Text></Card.Text>
        </Card.Footer>
      </Card>
    </div>
  );
}
