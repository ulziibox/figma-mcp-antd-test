import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import DashboardLayout from '../components/DashboardLayout';
import DashboardContent from '../components/DashboardContent';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard | Loan Management System</title>
        <meta name="description" content="Loan Management System Dashboard" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <DashboardLayout>
          <DashboardContent />
        </DashboardLayout>
      </main>
    </div>
  );
}
