import React from 'react';
import { Card, Typography, Select, Button, Divider } from 'antd';
import styles from './FilterSection.module.css';

const { Title } = Typography;
const { Option } = Select;

const FilterSection: React.FC = () => {
  return (
    <Card className={styles.filterCard} bordered={false}>
      <div className={styles.header}>
        <Title level={5} className={styles.headerTitle}>Filter</Title>
      </div>
      <Divider className={styles.divider} />
      
      <div className={styles.content}>
        <div className={styles.formItem}>
          <label className={styles.label}>Loan product</label>
          <Select 
            className={styles.select} 
            defaultValue="all" 
            suffixIcon={<span className={styles.arrow}>▼</span>}
          >
            <Option value="all">All</Option>
            <Option value="personal">Personal Loan</Option>
            <Option value="business">Business Loan</Option>
            <Option value="mortgage">Mortgage</Option>
          </Select>
        </div>
        
        <div className={styles.formItem}>
          <label className={styles.label}>Branch</label>
          <Select 
            className={styles.select} 
            defaultValue="all" 
            suffixIcon={<span className={styles.arrow}>▼</span>}
          >
            <Option value="all">All</Option>
            <Option value="main">Main Branch</Option>
            <Option value="north">North Branch</Option>
            <Option value="east">East Branch</Option>
          </Select>
        </div>
        
        <div className={styles.formItem}>
          <label className={styles.label}>Timeframe</label>
          <Select 
            className={styles.select} 
            defaultValue="quarterly" 
            suffixIcon={<span className={styles.arrow}>▼</span>}
          >
            <Option value="daily">Daily</Option>
            <Option value="weekly">Weekly</Option>
            <Option value="monthly">Monthly</Option>
            <Option value="quarterly">Quarterly</Option>
            <Option value="yearly">Yearly</Option>
          </Select>
        </div>
      </div>
      
      <Divider className={styles.divider} />
      
      <div className={styles.buttonContainer}>
        <Button type="primary" block className={styles.updateButton}>
          Update
        </Button>
      </div>
    </Card>
  );
};

export default FilterSection; 