import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home(){return <Layout title="Oracle Data Developer Handbook" description="C01-C40 Oracle course">
<header className="hero hero--primary"><div className="container"><h1 className="hero__title">Oracle Data Developer Handbook</h1><p className="hero__subtitle">SQL · PL/SQL · DWH · ETL/ODI · Performance · Architecture · Data Operations</p><div><Link className="button button--secondary button--lg" to="/intro">Start the course</Link></div></div></header>
<main className="container" style={{padding:'3rem 0'}}><h2>40 chapters, one mental model</h2><p>From SQL fundamentals to impact analysis, with Oracle examples, terminology and real-world DWH/Data Operations scenarios.</p></main>
</Layout>}
