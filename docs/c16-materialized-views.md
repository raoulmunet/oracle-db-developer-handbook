---
title: 'C16. Materialized Views'
---

# C16. Materialized Views

<div className="definition">Materialized Views matters because it connects data correctness with performance, operations and traceability. A senior Oracle Data Developer should be able to explain the concept, implement it safely, diagnose failures and prove the result after a change.</div>

## Core concepts

- **precomputed query results** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **complete vs fast refresh** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **materialized view logs** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **ON DEMAND vs ON COMMIT** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **query rewrite** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **staleness and refresh windows** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **DWH summary acceleration** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Key terminology

- **materialized view** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **fast refresh** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **complete refresh** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **query rewrite** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **materialized view log** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Oracle example

```sql
CREATE MATERIALIZED VIEW mv_monthly_sales
BUILD IMMEDIATE REFRESH COMPLETE ON DEMAND
ENABLE QUERY REWRITE AS
SELECT month_key, customer_sk, SUM(amount_ron) amount_ron
FROM fact_transaction JOIN dim_date USING(date_sk)
GROUP BY month_key, customer_sk;
```


## Practical checklist

- Define the business grain or logical unit of work first.
- Use explicit keys, predicates and conversions.
- Validate functional correctness and operational/performance behavior.
- For ETL/DWH, persist batch identifiers, timestamps, status, counts and rejects.
- For production changes, document dependencies, tests and rollback.



## DWH / Data Operations scenario

A banking data flow uses this concept together with audit logging, reconciliation and impact analysis. The solution must be explainable, testable, restartable when applicable, and verifiable through SQL and metadata.
