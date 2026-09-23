---
title: 'C13. Oracle Statistics'
---

# C13. Oracle Statistics

<div className="definition">Oracle Statistics matters because it connects data correctness with performance, operations and traceability. A senior Oracle Data Developer should be able to explain the concept, implement it safely, diagnose failures and prove the result after a change.</div>

## Core concepts

- **table, column and index statistics** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **NUM_ROWS, NDV, density and histograms** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **stale statistics and gathering strategy** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **DBMS_STATS preferences** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **incremental partition statistics** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **extended statistics for correlated columns** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **impact on cardinality estimates and plans** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Key terminology

- **statistics** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **NDV** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **density** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **histogram** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **stale statistics** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **extended statistics** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Oracle example

```sql
BEGIN
  DBMS_STATS.GATHER_TABLE_STATS(
    ownname => USER, tabname => 'FACT_TRANSACTION', cascade => TRUE);
END;
/
```


## Practical checklist

- Define the business grain or logical unit of work first.
- Use explicit keys, predicates and conversions.
- Validate functional correctness and operational/performance behavior.
- For ETL/DWH, persist batch identifiers, timestamps, status, counts and rejects.
- For production changes, document dependencies, tests and rollback.



## DWH / Data Operations scenario

A banking data flow uses this concept together with audit logging, reconciliation and impact analysis. The solution must be explainable, testable, restartable when applicable, and verifiable through SQL and metadata.
