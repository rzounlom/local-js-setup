import "./App.scss";

import { Button, Card, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

import axios from "axios";

const myPost = {
  createdAt: 1675377792,
  author: "Romaric Zounlome",
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/743.jpg",
  title: "The Coolest Place Ever!",
  subtitle: "For really ya'll...",
  topic: "cool places",
  imgUrl: "https://loremflickr.com/640/480/city",
  post: "Ascot gentrify blue bottle vexillologist, fingerstache lyft fanny pack semiotics neutra trust fund post-ironic lo-fi. Ugh XOXO raclette before they sold out trust fund forage tbh cornhole vibecession skateboard kombucha adaptogen fashion axe everyday carry taxidermy. Pitchfork blog quinoa yuccie cloud bread biodiesel unicorn 90's retro sus. La croix forage ugh jean shorts. Selvage try-hard meggings pop-up big mood. Shaman vibecession lomo authentic umami cardigan swag glossier beard direct trade. Irony next level hot chicken, mumblecore sartorial hoodie everyday carry messenger bag man bun four dollar toast whatever.",
  comments: [],
  id: "4",
};

const oldPosts = [
  {
    author: "Romaric Zounlome",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/743.jpg",
    title: "The Coolest Place Ever!",
    subtitle: "For really ya'll...",
    topic: "cool places",
    imgUrl: "https://loremflickr.com/640/480/city",
    post: "Ascot gentrify blue bottle vexillologist, fingerstache lyft fanny pack semiotics neutra trust fund post-ironic lo-fi. Ugh XOXO raclette before they sold out trust fund forage tbh cornhole vibecession skateboard kombucha adaptogen fashion axe everyday carry taxidermy. Pitchfork blog quinoa yuccie cloud bread biodiesel unicorn 90's retro sus. La croix forage ugh jean shorts. Selvage try-hard meggings pop-up big mood. Shaman vibecession lomo authentic umami cardigan swag glossier beard direct trade. Irony next level hot chicken, mumblecore sartorial hoodie everyday carry messenger bag man bun four dollar toast whatever.",
    comments: [],
  },
  {
    createdAt: 1675377792,
    author: "Romaric Zounlome",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/743.jpg",
    title: "The 2nd Coolest Place Ever!",
    subtitle: "For really this time...",
    topic: "cool places",
    imgUrl: "https://loremflickr.com/640/480/city",
    post: "Ascot gentrify blue bottle vexillologist, fingerstache lyft fanny pack semiotics neutra trust fund post-ironic lo-fi. Ugh XOXO raclette before they sold out trust fund forage tbh cornhole vibecession skateboard kombucha adaptogen fashion axe everyday carry taxidermy. Pitchfork blog quinoa yuccie cloud bread biodiesel unicorn 90's retro sus. La croix forage ugh jean shorts. Selvage try-hard meggings pop-up big mood. Shaman vibecession lomo authentic umami cardigan swag glossier beard direct trade. Irony next level hot chicken, mumblecore sartorial hoodie everyday carry messenger bag man bun four dollar toast whatever.",
    comments: [],
    id: "2",
  },
];

const Post = ({ post }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={post.imgUrl} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.post}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

const PostList = ({ posts }) => {
  if (posts.length > 0) {
    return posts.map((post) => <Post post={post} key={post.id} />);
  }

  return <div>No Posts</div>;
};

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://63db9c8fa3ac95cec5a5fe2f.mockapi.io/posts"
      );

      console.log("POSTS: ", data);
      console.table(data);
      setPosts([...data]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const createPost = async () => {
    try {
      const res = await axios.post(
        "https://63db9c8fa3ac95cec5a5fe2f.mockapi.io/posts",
        myPost
      );

      console.log(res);
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async () => {
    try {
      const res = await axios.delete(
        `https://63db9c8fa3ac95cec5a5fe2f.mockapi.io/posts/${myPost.id}`,
        myPost
      );

      console.log(res);
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
    return;
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          <button onClick={createPost}>Create Post</button>
          <button onClick={deletePost}>Delete Post</button>
          <PostList posts={posts} />
        </div>
      )}
    </div>
  );
}

export default App;
