import "./App.scss";

import { Col, Container, Row } from "react-bootstrap";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <Container className="App">
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;
