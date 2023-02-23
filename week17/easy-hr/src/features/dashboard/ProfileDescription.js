import { Descriptions } from "antd";

export default function ProfileDescription({ profile }) {
  return (
    <Descriptions title="User Info" layout="vertical">
      <Descriptions.Item label="FirstName">
        {profile.firstName}
      </Descriptions.Item>
      <Descriptions.Item label="LastName">{profile.lastName}</Descriptions.Item>
      <Descriptions.Item label="UserName">{profile.userName}</Descriptions.Item>
      <Descriptions.Item label="Title">{profile.title}</Descriptions.Item>
      <Descriptions.Item label="Ssalary">{profile.salary}</Descriptions.Item>
      <Descriptions.Item label="Avatar(url)">
        {profile.avatar}
      </Descriptions.Item>
      <Descriptions.Item label="Status">{profile.status}</Descriptions.Item>
      <Descriptions.Item label="Address" span={2}>
        {profile.address}
      </Descriptions.Item>
    </Descriptions>
  );
}
