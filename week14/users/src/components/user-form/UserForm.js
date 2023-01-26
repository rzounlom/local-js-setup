import "./UserForm.scss";

export default function UserForm({ formHandler, formData, handleSubmit }) {
  return (
    <div className="user-form-container">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {" "}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={formHandler}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={formHandler}
          />
        </div>
        <div className="form-group">
          {" "}
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={formHandler}
          />
          <input
            type="text"
            name="occupation"
            placeholder="occupation"
            value={formData.occupation}
            onChange={formHandler}
          />
        </div>
        <div className="form-group2">
          <input
            type="text"
            name="avatar"
            placeholder="Profile Img Url"
            value={formData.avatar}
            onChange={formHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
