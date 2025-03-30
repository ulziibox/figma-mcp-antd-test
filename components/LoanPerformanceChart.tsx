import React from 'react';
import { Card, Typography, Badge, Col, Row } from 'antd';
import styles from './LoanPerformanceChart.module.css';

const { Title, Text } = Typography;

// Mock data for the chart
const monthlyData = [
  { month: 'Jan', amount: 320000, count: 650 },
  { month: 'Feb', amount: 285000, count: 580 },
  { month: 'Mar', amount: 420000, count: 750 },
  { month: 'Apr', amount: 390000, count: 710 },
  { month: 'May', amount: 450000, count: 820 },
  { month: 'Jun', amount: 380000, count: 690 },
  { month: 'Jul', amount: 410000, count: 740 },
  { month: 'Aug', amount: 460000, count: 830 },
  { month: 'Sep', amount: 440000, count: 800 },
  { month: 'Oct', amount: 480000, count: 870 },
  { month: 'Nov', amount: 490000, count: 890 },
  { month: 'Dec', amount: 520000, count: 950 },
];

const LoanPerformanceChart: React.FC = () => {
  return (
    <Card className={styles.chartCard}>
      <div className={styles.chartHeader}>
        <Title level={5} className={styles.chartTitle}>
          Disbursed Amount and Loan Counts
        </Title>
        <div className={styles.legendContainer}>
          <div className={styles.legendItem}>
            <Badge color="#A0A0A0" className={styles.badge} />
            <Text className={styles.legendText}>Loan counts</Text>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.rectangleBadge} />
            <Text className={styles.legendText}>Disbursed amount</Text>
          </div>
        </div>
      </div>

      <div className={styles.chartContent}>
        <div className={styles.axisLabels}>
          <Text className={styles.axisLabel}>Amount</Text>
          <Text className={styles.axisLabel}>Count</Text>
        </div>

        {/* Y-axis labels */}
        <div className={styles.chartGrid}>
          <div className={styles.yAxisLabels}>
            {['500k', '400k', '300k', '200k', '100k', '0'].map((label, index) => (
              <div key={index} className={styles.yAxisLabel}>
                <Text className={styles.axisText}>฿{label}</Text>
                <div className={styles.gridLine}></div>
                <Text className={styles.axisText}>{1000 - index * 200}</Text>
              </div>
            ))}
          </div>

          {/* Chart bars */}
          <div className={styles.chartBars}>
            {monthlyData.map((data, index) => (
              <div key={index} className={styles.barGroup}>
                <div 
                  className={styles.bar} 
                  style={{ height: `${(data.amount / 520000) * 100}%` }}
                ></div>
              </div>
            ))}

            {/* Line representing loan counts */}
            <div className={styles.countLine}></div>

            {/* X-axis labels */}
            <div className={styles.xAxisLabels}>
              {monthlyData.map((data, index) => (
                <Text key={index} className={styles.xAxisLabel}>{data.month}</Text>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LoanPerformanceChart; 