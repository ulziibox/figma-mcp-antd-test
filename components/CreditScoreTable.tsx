import React from 'react';
import { Card, Typography, Table, Tag } from 'antd';
import styles from './CreditScoreTable.module.css';

const { Title } = Typography;

// Mock data for credit score distribution
const creditScoreData = [
  {
    key: '1',
    range: '700-850',
    percentage: 32,
    status: 'Excellent',
    color: '#10B981',
  },
  {
    key: '2',
    range: '670-699',
    percentage: 26,
    status: 'Good',
    color: '#4299E1',
  },
  {
    key: '3',
    range: '580-669',
    percentage: 22,
    status: 'Fair',
    color: '#F59E0B',
  },
  {
    key: '4',
    range: '300-579',
    percentage: 20,
    status: 'Poor',
    color: '#EF4444',
  },
];

const columns = [
  {
    title: 'Credit Range',
    dataIndex: 'range',
    key: 'range',
    className: styles.columnRange,
  },
  {
    title: 'Percentage',
    dataIndex: 'percentage',
    key: 'percentage',
    className: styles.columnPercentage,
    render: (percentage: number) => `${percentage}%`,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    className: styles.columnStatus,
    render: (text: string, record: any) => (
      <Tag 
        color={record.color} 
        className={styles.statusTag}
      >
        {text}
      </Tag>
    ),
  },
];

const CreditScoreTable: React.FC = () => {
  return (
    <Card className={styles.tableCard}>
      <div className={styles.tableHeader}>
        <Title level={5} className={styles.tableTitle}>
          Credit Score Distribution
        </Title>
      </div>
      
      <Table 
        dataSource={creditScoreData} 
        columns={columns} 
        pagination={false}
        size="small"
        className={styles.creditTable}
      />
    </Card>
  );
};

export default CreditScoreTable; 