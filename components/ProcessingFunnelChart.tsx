import React from 'react';
import { Card, Typography, Badge } from 'antd';
import styles from './ProcessingFunnelChart.module.css';

const { Title, Text } = Typography;

// Mock data for the chart
const funnelData = [
  { stage: 'Received', count: 4200, hours: 0 },
  { stage: 'In Review', count: 3600, hours: 18 },
  { stage: 'Approved', count: 2100, hours: 24 },
  { stage: 'Rejected', count: 900, hours: 12 },
  { stage: 'Returned', count: 1200, hours: 6 },
];

const ProcessingFunnelChart: React.FC = () => {
  return (
    <Card className={styles.chartCard}>
      <div className={styles.chartHeader}>
        <Title level={5} className={styles.chartTitle}>
          Loan Funnel and Application Processing
        </Title>
        <div className={styles.legendContainer}>
          <div className={styles.legendItem}>
            <Badge color="#54D78F" className={styles.badge} />
            <Text className={styles.legendText}>Loan application counts</Text>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.rectangleBadge} />
            <Text className={styles.legendText}>Avg TAT hours</Text>
          </div>
        </div>
      </div>

      <div className={styles.chartContent}>
        <div className={styles.axisLabels}>
          <Text className={styles.axisLabel}>Count</Text>
          <Text className={styles.axisLabel}>Hours</Text>
        </div>

        {/* Y-axis labels */}
        <div className={styles.chartGrid}>
          <div className={styles.yAxisLabels}>
            {['5000', '4000', '3000', '2000', '1000', '0'].map((label, index) => (
              <div key={index} className={styles.yAxisLabel}>
                <Text className={styles.axisText}>{label}</Text>
                <div className={styles.gridLine}></div>
                <Text className={styles.axisText}>{25 - index * 5}</Text>
              </div>
            ))}
          </div>

          {/* Chart bars */}
          <div className={styles.chartBars}>
            {funnelData.map((data, index) => (
              <div key={index} className={styles.barGroup}>
                <div 
                  className={styles.bar} 
                  style={{ height: `${(data.count / 5000) * 100}%` }}
                ></div>
              </div>
            ))}

            {/* Line representing processing hours */}
            <div className={styles.hoursLine}></div>

            {/* X-axis labels */}
            <div className={styles.xAxisLabels}>
              {funnelData.map((data, index) => (
                <Text key={index} className={styles.xAxisLabel}>{data.stage}</Text>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProcessingFunnelChart; 