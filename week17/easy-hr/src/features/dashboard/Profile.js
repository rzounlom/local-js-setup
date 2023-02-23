import "./Profile.scss";

import EditProfile from "./EditProfile";
import ProfileDescription from "./ProfileDescription";
import { Switch } from "antd";
import { useSelector } from "react-redux";
import { useState } from "react";

const Profile = () => {
  const { profile } = useSelector((state) => state.auth.currentEmployee);
  const [edit, setEdit] = useState(false);
  return (
    <div className="profile">
      <div className="edit-action">
        <span>Edit: </span>
        <Switch
          style={{ background: `${edit ? "aqua" : "lightgrey"}` }}
          onChange={() => setEdit(!edit)}
        />
      </div>
      {edit ? (
        <EditProfile profile={profile} />
      ) : (
        <ProfileDescription profile={profile} />
      )}
    </div>
  );
};
export default Profile;
