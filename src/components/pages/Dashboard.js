/**
 * it show analytical card and charts
 * @returns Dashbord anaytical card and charts
 */

import { useEffect, useState } from 'react';
import { Download, TrendingUp, User, UserPlus } from 'react-feather';
import { Shimmer } from 'react-shimmer';
import { Card, CardHeader, Col, Row } from 'reactstrap';
import AreaChart from '../chart/AreaChart';
import LineChart from '../chart/LineChart';
import PieChart from '../chart/PieChart';
import RadialBarChart from '../chart/RadialBarChart';

const Dashboard = () => {
  const [loading, setloading] = useState(true);

  const countArray = [
    { icon: User, count: '2.4M', label: 'User', color: 'color-blue' },
    { icon: Download, count: '2.5M', label: 'Downloads', color: 'color-green' },
    { icon: TrendingUp, count: '1.2B', label: 'Sales', color: 'color-yellow' },
    {
      icon: UserPlus,
      count: '800K',
      label: 'User Online',
      color: 'color-pink',
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Dashboard
          </li>
        </ol>
      </nav>
      <Row>
        {!loading &&
          countArray.map((data, index) => {
            return (
              <Col className="mb-4" key={`dashboard-${index}`} md={6} xl={3}>
                <Card className={`dashboard-count ${data?.color || ''}`}>
                  <div className="d-flex justify-content-center">
                    <data.icon className="count-icon" size={30} />
                  </div>
                  <div className="count-div d-flex flex-column justify-content-center mt-4">
                    <h2>{data.count}</h2>
                    <p>{data.label}</p>
                  </div>
                </Card>
              </Col>
            );
          })}

        {loading &&
          countArray.map((data, index) => {
            return (
              <Col className="mb-4" md={6} xl={3} key={index}>
                <Shimmer height={500} width={500} className="h200 br8 w-100" />
              </Col>
            );
          })}
      </Row>
      <Row className="g-4">
        <Col xl={12}>
          {!loading ? (
            <Card className="chart-card">
              <CardHeader>
                <h3>Area Chart</h3>
              </CardHeader>
              <AreaChart />
            </Card>
          ) : (
            <Shimmer height={500} width={500} className="h600 br8 w-100" />
          )}
        </Col>

        <Col xl={12}>
          {!loading ? (
            <Card className="chart-card">
              <CardHeader>
                <h3>Line Chart</h3>
              </CardHeader>
              <LineChart />
            </Card>
          ) : (
            <Shimmer height={500} width={500} className="h600 br8 w-100" />
          )}
        </Col>
        <Col xl={6}>
          {!loading ? (
            <Card className="piechart chart-card">
              <CardHeader>
                <h3>Radial Bar Chart</h3>
              </CardHeader>
              <RadialBarChart />
            </Card>
          ) : (
            <Shimmer height={500} width={500} className="h470 br8 w-100" />
          )}
        </Col>
        <Col xl={6}>
          {!loading ? (
            <Card className="piechart chart-card">
              <CardHeader>
                <h3>Pie Chart</h3>
              </CardHeader>
              <PieChart />
            </Card>
          ) : (
            <Shimmer height={500} width={500} className="h470 br8 w-100" />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
