---
title: 'C15. Partitioning'
---

# C15. Partitioning

<div className="definition">Partitioning matters because it connects data correctness with performance, operations and traceability. A senior Oracle Data Developer should be able to explain the concept, implement it safely, diagnose failures and prove the result after a change.</div>

## Core concepts

- **range, list, hash and composite partitioning** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **partition key selection** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **partition pruning** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **local vs global indexes** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **partition-wise joins** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **partition exchange load** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **maintenance and retention windows** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Key terminology

- **partition** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **partition pruning** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **local index** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **global index** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **partition exchange** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Oracle example

```sql
CREATE TABLE fact_transaction_p (
  transaction_id NUMBER, posting_date DATE, amount NUMBER
) PARTITION BY RANGE(posting_date)
INTERVAL (NUMTOYMINTERVAL(1,'MONTH'))
(PARTITION p0 VALUES LESS THAN (DATE '2026-01-01'));
```


## Practical checklist

- Define the business grain or logical unit of work first.
- Use explicit keys, predicates and conversions.
- Validate functional correctness and operational/performance behavior.
- For ETL/DWH, persist batch identifiers, timestamps, status, counts and rejects.
- For production changes, document dependencies, tests and rollback.



## DWH / Data Operations scenario

A banking data flow uses this concept together with audit logging, reconciliation and impact analysis. The solution must be explainable, testable, restartable when applicable, and verifiable through SQL and metadata.
