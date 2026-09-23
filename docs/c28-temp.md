---
title: 'C28. TEMP and Expensive Operations'
---

# C28. TEMP and Expensive Operations

<div className="definition">TEMP and Expensive Operations matters because it connects data correctness with performance, operations and traceability. A senior Oracle Data Developer should be able to explain the concept, implement it safely, diagnose failures and prove the result after a change.</div>

## Core concepts

- **sorts, hash joins and workareas** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **PGA vs TEMP spill** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **ORDER BY, GROUP BY, DISTINCT and analytic windows** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **V$SQL_WORKAREA and V$TEMPSEG_USAGE** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **bad estimates and oversized intermediate sets** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **reduce rows and width before expensive operations** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Key terminology

- **TEMP tablespace** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **workarea** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **spill** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **onepass** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **multipass** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Oracle example

```sql
SELECT sql_id, operation_type, expected_size, actual_mem_used, tempseg_size
FROM v$sql_workarea_active;
```


## Practical checklist

- Define the business grain or logical unit of work first.
- Use explicit keys, predicates and conversions.
- Validate functional correctness and operational/performance behavior.
- For ETL/DWH, persist batch identifiers, timestamps, status, counts and rejects.
- For production changes, document dependencies, tests and rollback.



## DWH / Data Operations scenario

A banking data flow uses this concept together with audit logging, reconciliation and impact analysis. The solution must be explainable, testable, restartable when applicable, and verifiable through SQL and metadata.
