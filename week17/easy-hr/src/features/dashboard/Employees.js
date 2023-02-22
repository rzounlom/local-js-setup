import { Col, Row } from "antd";

import Employee from "./Employee";
import SkeletonCards from "./SkeletonCards";
import { useSelector } from "react-redux";

export default function Emplyees({ employees }) {
  const { getAllEmployeeLodaing } = useSelector((state) => state.dashboard);

  if (getAllEmployeeLodaing) {
    return (
      <Row>
        <SkeletonCards />
      </Row>
    );
  } else if (employees) {
    return (
      <Row gutter={[16, 16]}>
        {employees.map((employee) => (
          <Col sm={24} md={12} lg={8} xl={6} key={employee.id}>
            <Employee employee={employee} />
          </Col>
        ))}
      </Row>
    );
  }
  return null;
}
