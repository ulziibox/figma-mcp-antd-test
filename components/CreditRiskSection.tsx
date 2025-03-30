import React from 'react';
import { Card, Typography, Row, Col } from 'antd';
import CreditScoreTable from './CreditScoreTable';
import styles from './CreditRiskSection.module.css';

const { Title } = Typography;

const CreditRiskSection: React.FC = () => {
  return (
    <Card className={styles.creditRiskCard}>
      <div className={styles.sectionHeader}>
        <Title level={4} className={styles.sectionTitle}>
          Credit Risk
        </Title>
      </div>
      
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <CreditScoreTable />
        </Col>
      </Row>
    </Card>
  );
};

export default CreditRiskSection; 