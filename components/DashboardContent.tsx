import React, { useState } from 'react';
import { Tabs, Button, Select, Row, Col } from 'antd';
import { DownloadOutlined, FilterOutlined } from '@ant-design/icons';
import styles from './DashboardContent.module.css';
import OverviewCards from './OverviewCards';
import LoanPerformanceChart from './LoanPerformanceChart';
import ProcessingFunnelChart from './ProcessingFunnelChart';
import LoanDecisionChart from './LoanDecisionChart';
import RejectionReasonsChart from './RejectionReasonsChart';
import CreditScoreTable from './CreditScoreTable';
import CreditRiskSection from './CreditRiskSection';

const { TabPane } = Tabs;
const { Option } = Select;

const DashboardContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('1');

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div className={styles.dashboardContent}>
      <div className={styles.tabsContainer}>
        <div className={styles.tabsWrapper}>
          <Tabs 
            activeKey={activeTab} 
            onChange={handleTabChange}
            className={styles.tabs}
          >
            <TabPane tab="Overview" key="1" />
            <TabPane tab="Applications" key="2" />
            <TabPane tab="Clients" key="3" />
            <TabPane tab="Reports" key="4" />
          </Tabs>
        </div>

        <div className={styles.actionsWrapper}>
          <div className={styles.filterAction}>
            <Button 
              icon={<FilterOutlined />} 
              className={styles.filterButton}
            >
              Filter
            </Button>
            <Select 
              defaultValue="this-month" 
              className={styles.periodSelect}
            >
              <Option value="this-month">This Month</Option>
              <Option value="last-month">Last Month</Option>
              <Option value="quarter">Last Quarter</Option>
              <Option value="year">Last Year</Option>
            </Select>
          </div>
          
          <Button 
            type="primary" 
            icon={<DownloadOutlined />}
            className={styles.exportButton}
          >
            Export
          </Button>
        </div>
      </div>

      <div className={styles.contentArea}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <OverviewCards />
          </Col>

          <Col xs={24} lg={14}>
            <LoanPerformanceChart />
          </Col>
          
          <Col xs={24} lg={10}>
            <ProcessingFunnelChart />
          </Col>
          
          <Col xs={24} lg={12}>
            <LoanDecisionChart />
          </Col>
          
          <Col xs={24} lg={12}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <RejectionReasonsChart />
              </Col>
            </Row>
          </Col>

          <Col xs={24}>
            <CreditRiskSection />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DashboardContent; 