import "./UserCard.scss";

import defaultAvatar from "../../assets/avatar.png";

export default function UserCard(props) {
  const { firstName, lastName, age, occupation, avatar } = props.user;
  return (
    <div className="card-container">
      <div className="card-img-container">
        <div className="card-img">
          <img src={avatar ? avatar : defaultAvatar} alt="user avatar" />
        </div>
      </div>
      <div className="user-info">
        <div>
          <span>Name</span>: {`${firstName} ${lastName} `}
        </div>{" "}
        <div>
          <span>Age</span>: {age}
        </div>
        <div>
          <span>Occupation</span>: {occupation}
        </div>
      </div>
    </div>
  );
}
