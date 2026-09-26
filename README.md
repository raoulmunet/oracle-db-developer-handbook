# Oracle Database Developer Guide

A structured learning and reference guide for Oracle database and data development.

The guide covers Oracle SQL, PL/SQL, transactions, OLTP/OLAP, Data Warehouse concepts, ETL/ODI, performance, architecture, data operations, banking data concepts, lineage and impact analysis.

Its purpose is to provide a progressive learning path from SQL fundamentals to practical Oracle data engineering.

## Published site

https://raoulmunet.github.io/oracle-db-developer-handbook/

## Local run

```bash
npm install
npm run start
```

Requires Node.js 20+.

## Production build

```bash
npm run build
npm run serve
```

## GitHub Pages

The included GitHub Actions workflow builds and deploys the site automatically after each push to `main`.

`docusaurus.config.js` derives the GitHub owner and repository name from GitHub Actions environment variables, so project pages and `<username>.github.io` repositories both work without hard-coding the username.
