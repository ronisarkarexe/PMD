import { Button, Result } from "antd";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Result
      status="403"
      title="401"
      subTitle="Sorry, this is not right path!."
      extra={
        <Link href="/login">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
};

export default NotFoundPage;
