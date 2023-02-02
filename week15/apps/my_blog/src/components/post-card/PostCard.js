import "./PostCard.scss";

import { Card, Image } from "react-bootstrap";

export default function PostCard({ post }) {
  return (
    <div className="post-card">
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
          </div>

          <Card.Text></Card.Text>
        </Card.Footer>
      </Card>
    </div>
  );
}
