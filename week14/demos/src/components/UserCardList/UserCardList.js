import UserCard from "../UserCard/UserCard";

export default function UserCardList({ users }) {
  console.log("USERS: ", users);
  if (users.length > 0) {
    return (
      <div>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <div>No Users</div>;
  }
}
