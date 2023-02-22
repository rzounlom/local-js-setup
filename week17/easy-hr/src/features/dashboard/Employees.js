import { Col, Row } from "antd";

import Employee from "./Employee";

export default function Emplyees({ employees }) {
  console.log({ employees });

  if (employees) {
    return (
      <Row gutter={[16, 16]}>
        {employees.map((employee) => (
          <Col span={8} key={employee.id}>
            <Employee employee={employee} />
          </Col>
        ))}
      </Row>
    );
  }
  return null;
}
