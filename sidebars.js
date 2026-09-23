const sidebars = {
  courseSidebar: [
    'intro',
    {type:'category', label:'Part I — SQL & PL/SQL', items:['c01-sql','c02-plsql','c03-transactions']},
    {type:'category', label:'Part II — OLTP, OLAP & DWH', items:['c04-oltp','c05-olap','c06-data-warehouse','c07-scd','c08-etl-elt','c09-data-quality']},
    {type:'category', label:'Part III — Optimizer & Performance', items:['c10-optimizer','c11-execution-plans','c12-indexes','c13-statistics','c14-join-algorithms','c15-partitioning','c16-materialized-views']},
    {type:'category', label:'Part IV — Objects & Architecture', items:['c17-database-objects','c18-constraints','c19-storage','c20-architecture','c21-memory','c22-redo-undo','c23-parsing-binds']},
    {type:'category', label:'Part V — Advanced Performance & Operations', items:['c24-sql-optimization','c25-sql-monitoring','c26-hints','c27-parallel','c28-temp','c29-security','c30-multitenant','c31-connectivity','c32-backup-recovery']},
    {type:'category', label:'Part VI — Data Engineering & Banking', items:['c33-data-modeling','c34-odi-orchestration','c35-cdc','c36-batch-processing','c37-reconciliation','c38-banking-data','c39-data-lineage','c40-impact-analysis']},
    'glossary',
  ],
};
export default sidebars;
