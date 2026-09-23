---
title: 'C27. Parallel Execution'
---

# C27. Parallel Execution

<div className="definition">Parallel Execution matters because it connects data correctness with performance, operations and traceability. A senior Oracle Data Developer should be able to explain the concept, implement it safely, diagnose failures and prove the result after a change.</div>

## Core concepts

- **query coordinator and PX servers** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **degree of parallelism (DOP)** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **PX SEND/RECEIVE and redistribution** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **hash vs broadcast distribution** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **parallel scans, joins and group by** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **parallel DML, CTAS and index builds** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **skew, resource contention and when not to use parallelism** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Key terminology

- **parallel execution** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **query coordinator** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **PX server** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **DOP** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **data redistribution** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **skew** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Oracle example

```sql
SELECT /*+ PARALLEL(f 8) */ customer_sk, SUM(amount_ron)
FROM fact_transaction f
GROUP BY customer_sk;
```


## Practical checklist

- Define the business grain or logical unit of work first.
- Use explicit keys, predicates and conversions.
- Validate functional correctness and operational/performance behavior.
- For ETL/DWH, persist batch identifiers, timestamps, status, counts and rejects.
- For production changes, document dependencies, tests and rollback.



## DWH / Data Operations scenario

A banking data flow uses this concept together with audit logging, reconciliation and impact analysis. The solution must be explainable, testable, restartable when applicable, and verifiable through SQL and metadata.
