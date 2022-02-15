import React from "react";
import { Typography, Row, Col, Statistic } from "antd";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi";
const HomePage = () => {
  const { Title } = Typography;
  const [data, isFetching] = useGetCryptosQuery();
  console.log(data);
  return (
    <>
      <Title level={2} className="heading">
        Statistics
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total cryptocurrencies" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total exchange" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total market cap" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h volume" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total market" value={5} />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
