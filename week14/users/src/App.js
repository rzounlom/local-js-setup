import "./App.scss";

import UserCardList from "./components/user-card-list/UserCardList";
import UserForm from "./components/user-form/UserForm";
import { useState } from "react";
import { users } from "./data/users";

function App() {
  const [userList, setUserList] = useState(users);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    occupation: "",
    avatar: "",
  });

  const handleFormData = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let key in formData) {
      if (key !== "avatar" && formData[key] === "") {
        alert("Please fill in all data");
        return;
      }
    }
    setUserList([...userList, { id: userList.length + 1, ...formData }]);
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      occupation: "",
      avatar: "",
    });
  };

  return (
    <div className="app">
      <header>
        <UserForm
          formHandler={handleFormData}
          formData={formData}
          setUserList={setUserList}
          handleSubmit={handleSubmit}
        />
      </header>
      <main>
        <UserCardList users={userList} />
      </main>
    </div>
  );
}

export default App;
