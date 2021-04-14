import { Typography, Row, Col, Space, List, Divider } from "antd";

const { Title, Paragraph, Text } = Typography;

const Introduction = () => {
  const steps = [
    "1. Copy Facebook post URL",
    "2. Paste the URL in the text field below",
    "3. Click the Download button",
  ];
  return (
    <>
      <Divider orientation="left">Free Facebook Video Downloader</Divider>
      <List
        dataSource={steps}
        renderItem={(item) => (
          <List.Item style={{ textAlign: "left", marginLeft: 50 }}>
            <Typography.Text mark></Typography.Text> {item}
          </List.Item>
        )}
      />
    </>
  );
};

export default Introduction;
