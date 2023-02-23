import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import EditProfile from "./EditProfile";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function EditEmployee() {
  const history = useHistory();
  const { profile } = useSelector((state) => state.auth.currentEmployee);
  const employee = useSelector((state) => state.dashboard.employeeToEdit);

  useEffect(() => {
    if (profile.status !== "ADMIN") {
      history.push("/dashboard");
    }
  }, [history, profile]);

  return (
    <>
      <Link to="/dashboard/employees">
        <Button
          type="primary"
          style={{ background: "aqua", marginBottom: "10px" }}
          shape="round"
          icon={<ArrowLeftOutlined />}
          size="small"
        >
          All Employees
        </Button>
      </Link>
      <EditProfile profile={employee} editEmployee />
    </>
  );
}
