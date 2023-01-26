import "./UserCardList.scss";

import UserCard from "../user-card/UserCard";

export default function UserCardList({ users }) {
  if (users.length > 0) {
    return (
      <div className="card-list-container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="card-list-container">
        <div className="no-users">No Current Users</div>
      </div>
    );
  }
}
