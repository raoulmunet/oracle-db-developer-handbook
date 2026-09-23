---
title: 'C06. Data Warehouse'
---

# C06. Data Warehouse

<div className="definition">Data Warehouse matters because it connects data correctness with performance, operations and traceability. A senior Oracle Data Developer should be able to explain the concept, implement it safely, diagnose failures and prove the result after a change.</div>

## Core concepts

- **enterprise DWH purpose and architecture** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **facts, dimensions, grain and surrogate keys** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **staging, integration and presentation layers** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **star and snowflake schemas** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **conformed dimensions and slowly changing dimensions** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **auditability, reconciliation and historical truth** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Key terminology

- **DWH** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **data mart** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **surrogate key** — A generated technical key with no business semantics.
- **conformed dimension** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **fact table** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **dimension table** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Oracle example

```sql
CREATE TABLE fact_transaction (
  transaction_sk NUMBER PRIMARY KEY,
  customer_sk NUMBER NOT NULL,
  account_sk NUMBER NOT NULL,
  posting_date_sk NUMBER NOT NULL,
  amount_ron NUMBER(18,2)
);
```


![Data Warehouse](/img/star_schema.png)


## Practical checklist

- Define the business grain or logical unit of work first.
- Use explicit keys, predicates and conversions.
- Validate functional correctness and operational/performance behavior.
- For ETL/DWH, persist batch identifiers, timestamps, status, counts and rejects.
- For production changes, document dependencies, tests and rollback.



## DWH / Data Operations scenario

A banking data flow uses this concept together with audit logging, reconciliation and impact analysis. The solution must be explainable, testable, restartable when applicable, and verifiable through SQL and metadata.
