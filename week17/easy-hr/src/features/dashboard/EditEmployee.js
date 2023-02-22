import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function EditEmployee() {
  const employee = useSelector((state) => state.dashboard.employeeToEdit);
  const { employeeId } = useParams();
  console.log({ employee });
  return <div>ManageEmployee: {employeeId}</div>;
}
