import { Card } from "antd";
import { Link } from "react-router-dom";
import { setEmployeeToEdit } from "./dashboardSlice";
import { useDispatch } from "react-redux";

const { Meta } = Card;

export default function Employee({ employee }) {
  const dispatch = useDispatch();

  return (
    <Link
      to={`employee/${employee.id}`}
      onClick={() => dispatch(setEmployeeToEdit(employee))}
    >
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <img
            alt="example"
            src={
              `${employee.avatar}` ||
              "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
            }
          />
        }
      >
        <Meta
          title={`${employee.firstName} ${employee.lastName}`}
          description={`${employee.title}`}
        />
      </Card>
    </Link>
  );
}
