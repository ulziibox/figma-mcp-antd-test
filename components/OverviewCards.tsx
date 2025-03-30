import React from 'react';
import { Row, Col, Card, Typography, Divider } from 'antd';
import styles from './OverviewCards.module.css';

const { Title, Text } = Typography;

interface StatCardProps {
  title: string;
  children: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, children }) => (
  <Card className={styles.statCard}>
    <div className={styles.statCardHeader}>
      <Text className={styles.statCardTitle}>{title}</Text>
    </div>
    <Divider className={styles.divider} />
    {children}
  </Card>
);

interface StatItemProps {
  label: string;
  value: string;
  trend: string;
  trendValue: string;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, trend, trendValue }) => (
  <div className={styles.statItem}>
    <Text className={styles.statLabel}>{label}</Text>
    <Text className={styles.statValue}>{value}</Text>
    <Text className={styles.statTrend} style={{ color: trend === 'up' ? '#54D78F' : '#FF6D6F' }}>
      {trendValue}
    </Text>
  </div>
);

const OverviewCards: React.FC = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={8}>
        <StatCard title="Total Disbursed amount">
          <div className={styles.statContent}>
            <StatItem
              label="Individual"
              value="฿28,450,000"
              trend="up"
              trendValue="+15% from last month"
            />
            <StatItem
              label="SME"
              value="฿9,170,000"
              trend="up"
              trendValue="+11% from last month"
            />
          </div>
        </StatCard>
      </Col>
      
      <Col xs={24} sm={8}>
        <StatCard title="Total applications processed">
          <div className={styles.statContent}>
            <StatItem
              label="Individual"
              value="5,820"
              trend="up"
              trendValue="+5% from last month"
            />
            <StatItem
              label="SME"
              value="300"
              trend="up"
              trendValue="+1% from last month"
            />
          </div>
        </StatCard>
      </Col>
      
      <Col xs={24} sm={8}>
        <StatCard title="Contracted clients">
          <div className={styles.statContent}>
            <StatItem
              label="Individual"
              value="3,820"
              trend="up"
              trendValue="+5% from last month"
            />
            <StatItem
              label="SME"
              value="100"
              trend="up"
              trendValue="+1% from last month"
            />
          </div>
        </StatCard>
      </Col>
    </Row>
  );
};

export default OverviewCards; 