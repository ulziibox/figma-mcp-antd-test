import React from 'react';
import { Card, Typography, Select, Button, Divider } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import styles from './ExportSection.module.css';

const { Title } = Typography;
const { Option } = Select;

const ExportSection: React.FC = () => {
  return (
    <Card className={styles.exportCard} bordered={false}>
      <div className={styles.header}>
        <Title level={5} className={styles.headerTitle}>Export</Title>
      </div>
      <Divider className={styles.divider} />
      
      <div className={styles.content}>
        <div className={styles.formItem}>
          <label className={styles.label}>File type</label>
          <Select 
            className={styles.select} 
            defaultValue="pdf" 
            suffixIcon={<span className={styles.arrow}>▼</span>}
          >
            <Option value="pdf">PDF</Option>
            <Option value="excel">Excel</Option>
            <Option value="csv">CSV</Option>
          </Select>
        </div>
      </div>
      
      <Divider className={styles.divider} />
      
      <div className={styles.buttonContainer}>
        <Button 
          className={styles.downloadButton}
          icon={<DownloadOutlined />}
          block
        >
          Download
        </Button>
      </div>
    </Card>
  );
};

export default ExportSection; 