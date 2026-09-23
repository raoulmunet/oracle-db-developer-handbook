---
title: 'C39. Data Lineage'
---

# C39. Data Lineage

<div className="definition">Data Lineage matters because it connects data correctness with performance, operations and traceability. A senior Oracle Data Developer should be able to explain the concept, implement it safely, diagnose failures and prove the result after a change.</div>

## Core concepts

- **where data came from and how it changed** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **technical vs business lineage** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **column-level and table-level lineage** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **source-to-target mappings and transformation rules** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **job/package/procedure dependencies** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **metadata capture and audit columns** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **using lineage for incidents, impact analysis and compliance** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Key terminology

- **data lineage** — The origin, transformations and path of data from source to consumer.
- **source-to-target** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **transformation rule** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **technical lineage** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **business lineage** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **metadata** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Oracle example

```sql
SELECT owner, name, type, referenced_owner, referenced_name, referenced_type
FROM all_dependencies
WHERE name = 'LOAD_FACT_TRANSACTION';
```


![Data Lineage](/img/lineage.png)


## Practical checklist

- Define the business grain or logical unit of work first.
- Use explicit keys, predicates and conversions.
- Validate functional correctness and operational/performance behavior.
- For ETL/DWH, persist batch identifiers, timestamps, status, counts and rejects.
- For production changes, document dependencies, tests and rollback.



## DWH / Data Operations scenario

A banking data flow uses this concept together with audit logging, reconciliation and impact analysis. The solution must be explainable, testable, restartable when applicable, and verifiable through SQL and metadata.
