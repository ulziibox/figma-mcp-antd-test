import React from 'react';
import { Menu, Avatar, Divider } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Image from 'next/image';
import styles from './LeftSideMenu.module.css';

interface MenuItemProps {
  icon: string;
  text: string;
  active?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, active = false }) => {
  return (
    <div className={`${styles.menuItem} ${active ? styles.activeMenuItem : ''}`}>
      <div className={styles.content}>
        <div className={styles.iconContainer}>
          <Image 
            src={`/icons/${icon}.svg`} 
            alt={text} 
            width={20} 
            height={20}
          />
        </div>
        <span className={active ? styles.activeText : styles.text}>{text}</span>
      </div>
    </div>
  );
};

const LeftSideMenu: React.FC = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuItems}>
        <MenuItem icon="dashboard" text="Dashboard" active={true} />
        <Divider type="vertical" className={styles.divider} />
        <MenuItem icon="kyc1" text="KYC" />
        <Divider type="vertical" className={styles.divider} />
        <MenuItem icon="customer1" text="Customer" />
        <Divider type="vertical" className={styles.divider} />
        <MenuItem icon="collateral" text="Collateral" />
        <Divider type="vertical" className={styles.divider} />
        <MenuItem icon="application" text="Application" />
        <Divider type="vertical" className={styles.divider} />
        <MenuItem icon="transactions" text="Transactions" />
        <Divider type="vertical" className={styles.divider} />
        <MenuItem icon="documents" text="Documents" />
        <Divider type="vertical" className={styles.divider} />
        <MenuItem icon="reporting" text="Reporting" />
        <Divider type="vertical" className={styles.divider} />
        <MenuItem icon="dashboard" text="Administration" />
      </div>
      
      <div className={styles.userProfile}>
        <div className="avatar-placeholder">U</div>
        <DownOutlined className={styles.downIcon} />
      </div>
    </div>
  );
};

export default LeftSideMenu; 