import "./Header.scss";

import MyNav from "../nav/Navbar";

export default function Header({ getPosts }) {
  return (
    <header>
      <MyNav getPosts={getPosts} />
    </header>
  );
}
