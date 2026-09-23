---
title: 'C11. Execution Plans'
---

# C11. Execution Plans

<div className="definition">Execution Plans matters because it connects data correctness with performance, operations and traceability. A senior Oracle Data Developer should be able to explain the concept, implement it safely, diagnose failures and prove the result after a change.</div>

## Core concepts

- **reading plans from the inside out** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **operation, object, rows, cost and predicates** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **E-Rows vs A-Rows and Starts** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **access predicates vs filter predicates** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **plan hash value** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **DBMS_XPLAN and runtime statistics** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **recognizing expensive joins, scans and sorts** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Key terminology

- **execution plan** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **E-Rows** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **A-Rows** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **plan hash value** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **access predicate** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **filter predicate** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Oracle example

```sql
EXPLAIN PLAN FOR
SELECT * FROM orders WHERE customer_id = 100;
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY);
```


## Practical checklist

- Define the business grain or logical unit of work first.
- Use explicit keys, predicates and conversions.
- Validate functional correctness and operational/performance behavior.
- For ETL/DWH, persist batch identifiers, timestamps, status, counts and rejects.
- For production changes, document dependencies, tests and rollback.



## DWH / Data Operations scenario

A banking data flow uses this concept together with audit logging, reconciliation and impact analysis. The solution must be explainable, testable, restartable when applicable, and verifiable through SQL and metadata.
