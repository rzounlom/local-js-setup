import { useState } from "react";

export default function ComponentState({ name }) {
  const [userName, setName] = useState("John doe");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    hobby: "",
  });

  const handleName = (e) => {
    setName(name);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = (event) => {
    console.log("SUBMITTING USER DATA: ", userData);
    event.preventDefault();
    setUserData({
      firstName: "",
      lastName: "",
      hobby: "",
    });
  };

  return (
    <div>
      Name: {userName} <button onClick={handleName}>Click Me</button>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          placeholder="First Name..."
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          placeholder="Last Name..."
          onChange={handleChange}
        />
        <input
          type="text"
          name="hobby"
          value={userData.hobby}
          placeholder="Hobby..."
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
