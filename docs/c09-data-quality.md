---
title: 'C09. Data Quality'
---

# C09. Data Quality

<div className="definition">Data Quality matters because it connects data correctness with performance, operations and traceability. A senior Oracle Data Developer should be able to explain the concept, implement it safely, diagnose failures and prove the result after a change.</div>

## Core concepts

- **completeness, validity, uniqueness, consistency and timeliness** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **profiling and rule definition** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **safe conversions with VALIDATE_CONVERSION** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **duplicate detection with GROUP BY and ROW_NUMBER** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **referential and cross-table rules** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **quarantine, DBMS_ERRLOG and reconciliation** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **DQ scoring and framework design** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Key terminology

- **data profiling** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **completeness** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **validity** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **uniqueness** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **quarantine** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **reconciliation** — Evidence that source and target agree according to explicit rules.

## Oracle example

```sql
SELECT raw_amount
FROM stg_payment
WHERE VALIDATE_CONVERSION(raw_amount AS NUMBER) = 0;
```


## Practical checklist

- Define the business grain or logical unit of work first.
- Use explicit keys, predicates and conversions.
- Validate functional correctness and operational/performance behavior.
- For ETL/DWH, persist batch identifiers, timestamps, status, counts and rejects.
- For production changes, document dependencies, tests and rollback.



## DWH / Data Operations scenario

A banking data flow uses this concept together with audit logging, reconciliation and impact analysis. The solution must be explainable, testable, restartable when applicable, and verifiable through SQL and metadata.
