---
title: 'C12. Oracle Indexes'
---

# C12. Oracle Indexes

<div className="definition">Oracle Indexes matters because it connects data correctness with performance, operations and traceability. A senior Oracle Data Developer should be able to explain the concept, implement it safely, diagnose failures and prove the result after a change.</div>

## Core concepts

- **B-tree indexes and unique indexes** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **composite indexes and leading columns** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **function-based indexes** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **bitmap indexes for analytic use cases** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **clustering factor and selectivity** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **index range scan, unique scan and full scan** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **when indexes hurt DML and maintenance** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Key terminology

- **B-tree index** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **bitmap index** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **composite index** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **function-based index** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **clustering factor** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Oracle example

```sql
CREATE INDEX ix_txn_account_date
ON bank_transaction(account_id, posting_date);
```


## Practical checklist

- Define the business grain or logical unit of work first.
- Use explicit keys, predicates and conversions.
- Validate functional correctness and operational/performance behavior.
- For ETL/DWH, persist batch identifiers, timestamps, status, counts and rejects.
- For production changes, document dependencies, tests and rollback.



## DWH / Data Operations scenario

A banking data flow uses this concept together with audit logging, reconciliation and impact analysis. The solution must be explainable, testable, restartable when applicable, and verifiable through SQL and metadata.
