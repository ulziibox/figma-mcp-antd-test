import React from 'react';
import { Card, Typography } from 'antd';
import styles from './RejectionReasonsChart.module.css';

const { Title, Text } = Typography;

// Mock data for rejection reasons
const rejectionReasons = [
  { reason: 'Low income', count: 116 },
  { reason: 'Job stability', count: 87 },
  { reason: 'Poor credit score', count: 58 },
  { reason: 'Existing NPL', count: 20 },
  { reason: 'Suspected fraud', count: 10 }
];

const RejectionReasonsChart: React.FC = () => {
  const maxCount = Math.max(...rejectionReasons.map(item => item.count));
  
  return (
    <Card className={styles.chartCard}>
      <div className={styles.chartHeader}>
        <Title level={5} className={styles.chartTitle}>
          Top Rejection Reasons
        </Title>
      </div>
      
      <div className={styles.reasonsList}>
        {rejectionReasons.map((item, index) => (
          <div key={index} className={styles.reasonItem}>
            <Text className={styles.reasonText}>{item.reason}</Text>
            <div className={styles.barContainer}>
              <div 
                className={styles.progressBar}
                style={{ width: `${(item.count / maxCount) * 100}%` }}
              ></div>
              <Text className={styles.countText}>{item.count}</Text>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RejectionReasonsChart; 