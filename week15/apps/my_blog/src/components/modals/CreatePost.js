import { Button, Form, Modal } from "react-bootstrap";

import axios from "axios";
import { useState } from "react";

export default function CreatePost({ show, handleClose, getPosts }) {
  const [postData, setPostData] = useState({
    topic: "",
    author: "",
    title: "",
    subtitle: "",
    imgUrl: "",
    post: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setPostData({ ...postData, [name]: value });
    // console.log("POST DATA: ", postData);
  };

  const createPost = async () => {
    try {
      const res = await axios.post(
        "https://63db9c8fa3ac95cec5a5fe2f.mockapi.io/posts",
        { ...postData }
      );
      console.log("POST: ", post);
      console.log("res: ", res);
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SUBMITTING POST: ", postData);
    createPost();
    setPostData({
      topic: "",
      author: "",
      title: "",
      subtitle: "",
      imgUrl: "",
      post: "",
    });

    handleClose();
  };

  const { topic, author, title, subtitle, imgUrl, post } = postData;

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={author}
                placeholder="John Doe"
                required
                autoFocus
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Topic</Form.Label>
              <Form.Control
                type="text"
                name="topic"
                value={topic}
                placeholder="The best post ever..."
                required
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={title}
                placeholder="The best post ever..."
                required
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Subtitle</Form.Label>
              <Form.Control
                type="text"
                name="subtitle"
                value={subtitle}
                placeholder="Like, for real..."
                required
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                type="text"
                name="imgUrl"
                value={imgUrl}
                placeholder="https://mycoolimage.com/coolimg.png"
                required
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Post</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                name="post"
                value={post}
                placeholder="Let me tell you why this is the best post ever..."
                required
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Create Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
