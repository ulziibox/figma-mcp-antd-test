import React from 'react';
import { Card, Typography, Row, Col, Progress } from 'antd';
import styles from './LoanDecisionChart.module.css';

const { Title, Text } = Typography;

// Mock data for the chart
const chartData = {
  total: 5820,
  approved: { count: 4365, percentage: 75 },
  returned: { count: 1455, percentage: 25 },
  rejected: { count: 291, percentage: 5 }, // Note: This is a subset of returned ones
};

const LoanDecisionChart: React.FC = () => {
  return (
    <Card className={styles.chartCard}>
      <div className={styles.chartHeader}>
        <Title level={5} className={styles.chartTitle}>
          Loan Application Decision Rate
        </Title>
      </div>
      
      <Row className={styles.chartContent}>
        <Col span={10}>
          <div className={styles.donutChartContainer}>
            <div className={styles.donutChart}>
              <div className={styles.donutHole}>
                <div className={styles.donutTotal}>
                  <Text className={styles.totalTitle}>Total</Text>
                  <Text className={styles.totalValue}>{chartData.total}</Text>
                </div>
              </div>
            </div>
          </div>
        </Col>
        
        <Col span={14}>
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.statHeader}>
                <div className={styles.colorIndicator} style={{ backgroundColor: '#54D78F' }}></div>
                <Text className={styles.statTitle}>Approved - {chartData.approved.percentage}%</Text>
              </div>
              <Text className={styles.statValue}>{chartData.approved.count}</Text>
            </div>
            
            <div className={styles.statItem}>
              <div className={styles.statHeader}>
                <div className={styles.colorIndicator} style={{ backgroundColor: '#FFD200' }}></div>
                <Text className={styles.statTitle}>Returned - {chartData.returned.percentage}%</Text>
              </div>
              <Text className={styles.statValue}>{chartData.returned.count}</Text>
            </div>
            
            <div className={styles.statItem}>
              <div className={styles.statHeader}>
                <div className={styles.colorIndicator} style={{ backgroundColor: '#FF6D6F' }}></div>
                <Text className={styles.statTitle}>Rejected - {chartData.rejected.percentage}%</Text>
              </div>
              <Text className={styles.statValue}>{chartData.rejected.count}</Text>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default LoanDecisionChart; 