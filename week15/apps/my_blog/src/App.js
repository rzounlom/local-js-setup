import "./App.scss";

import { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import axios from "axios";

function App() {
  const [allposts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true);
    const { data } = await axios.get(
      "https://63db9c8fa3ac95cec5a5fe2f.mockapi.io/posts"
    );

    // console.log("RESPONSE: ", data);
    // console.table(data);
    setAllPosts(data);
    setLoading(false);
    return;
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container className="App">
      <Header getPosts={getPosts} />
      <Main posts={allposts} getPosts={getPosts} />
      <Footer />
    </Container>
  );
}

export default App;
