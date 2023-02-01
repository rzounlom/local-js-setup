import "./Header.scss";

import AddMovie from "../common/modals/AddMovie";
import { useState } from "react";

export default function Header({ addMovie }) {
  const [show, setShow] = useState(false);
  const handleShowModal = () => setShow(true);
  const handleCloseModal = () => setShow(false);
  return (
    <header>
      <AddMovie
        show={show}
        handleCloseModal={handleCloseModal}
        addMovie={addMovie}
      />
      <h1>My Movie Reviews</h1>

      <div className="add-movie-container">
        <button onClick={handleShowModal}>Add New Movie</button>
      </div>
    </header>
  );
}
