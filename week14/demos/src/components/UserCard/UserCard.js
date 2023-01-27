import "./UserCard.scss";

export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <div>{user.firstName}</div>
      <div>{user.lastName}</div>
      <div>{user.age}</div>
      <div>{user.occupation}</div>
    </div>
  );
}
