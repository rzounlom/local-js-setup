import "./Header.scss";

import AddMovie from "../common/forms/add-movie/AddMovie";

export default function Header() {
  return (
    <header>
      <div className="heading">
        <h3>Movie Reviews</h3>
      </div>
      <div className="add-movie-container">
        <AddMovie />
      </div>
    </header>
  );
}
