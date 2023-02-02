import "./PostList.scss";

import { Col, Row } from "react-bootstrap";

import PostCard from "../post-card/PostCard";

// const post = {
//   id: 4,
//   createdAt: "2023-02-02T03:40:58.472Z",
//   topic: "night life",
//   avatar:
//     "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/747.jpg",
//   author: "Romaric Zounlome",
//   title: "This place is pretty cool!",
//   subtitle: "You have to see it for yourself",
//   imgUrl: "https://loremflickr.com/640/480/city",
//   post: "IAscot gentrify blue bottle vexillologist, fingerstache lyft fanny pack semiotics neutra trust fund post-ironic lo-fi. Ugh XOXO raclette before they sold out trust fund forage tbh cornhole vibecession skateboard kombucha adaptogen fashion axe everyday carry taxidermy. Pitchfork blog quinoa yuccie cloud bread biodiesel unicorn 90's retro sus. La croix forage ugh jean shorts. Selvage try-hard meggings pop-up big mood. Shaman vibecession lomo authentic umami cardigan swag glossier beard direct trade. Irony next level hot chicken, mumblecore sartorial hoodie everyday carry messenger bag man bun four dollar toast whatever.",
//   comments: [
//     {
//       id: 1,
//       name: "John Doe",
//       comment: "This place looks pretty cool",
//     },
//     {
//       id: 2,
//       name: "John Doe",
//       comment: "This place looks pretty cool",
//     },
//     {
//       id: 3,
//       name: "John Doe",
//       comment: "This place looks pretty cool",
//     },
//   ],
// };

export default function PostList({ posts, getPosts }) {
  return (
    <div className="post-list">
      <Row>
        {posts.map((post) => (
          <Col lg={6} key={post.id}>
            <PostCard post={post} getPosts={getPosts} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
