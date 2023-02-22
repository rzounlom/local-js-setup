import { Card } from "antd";
const { Meta } = Card;

export default function Employee({ employee }) {
  return (
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
        description="www.instagram.com"
      />
    </Card>
  );
}
