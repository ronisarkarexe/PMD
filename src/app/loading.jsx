import { Flex, Row, Spin } from "antd";

const Loading = () => {
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Flex align="center" gap="middle">
        <Spin size="large" />
      </Flex>
    </Row>
  );
};

export default Loading;
