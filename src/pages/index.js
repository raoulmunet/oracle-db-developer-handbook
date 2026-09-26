import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home(){return <Layout title="Oracle Database Developer Guide" description="A structured path from SQL fundamentals to Oracle data engineering">
<header className="hero hero--primary"><div className="container"><h1 className="hero__title">Oracle Database Developer Guide</h1><p className="hero__subtitle">SQL · PL/SQL · DWH · ETL/ODI · Performance · Architecture · Data Engineering</p><div><Link className="button button--secondary button--lg" to="/intro">Start the guide</Link></div></div></header>
<main className="container" style={{padding:'3rem 0'}}><h2>40 chapters, one structured learning path</h2><p>From SQL fundamentals to Oracle data engineering, with practical examples, terminology, DWH/ETL concepts, performance topics and real-world data development scenarios.</p></main>
</Layout>}
