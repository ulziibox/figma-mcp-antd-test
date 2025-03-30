import React, { ReactNode } from 'react';
import { Layout, Row, Col } from 'antd';
import LeftSideMenu from './LeftSideMenu';
import FilterSection from './FilterSection';
import ExportSection from './ExportSection';
import styles from './DashboardLayout.module.css';

const { Content } = Layout;

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <Layout className={styles.layout}>
      <LeftSideMenu />
      <Layout className={styles.mainLayout}>
        <Content className={styles.content}>
          <Row gutter={[16, 16]}>
            <Col span={4} className={styles.sidebarCol}>
              <div className={styles.sidebarContent}>
                <FilterSection />
                <ExportSection />
              </div>
            </Col>
            <Col span={20} className={styles.dashboardCol}>
              {children}
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout; 