---
title: 'C22. Redo / Undo'
---

# C22. Redo / Undo

<div className="definition">Redo / Undo matters because it connects data correctness with performance, operations and traceability. A senior Oracle Data Developer should be able to explain the concept, implement it safely, diagnose failures and prove the result after a change.</div>

## Core concepts

- **redo as recovery-oriented change records** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **undo as logical before-image information** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **commit durability and LGWR** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **read consistency from undo** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **rollback and transaction recovery** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **ARCHIVELOG and recovery chain** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **DWH implications of direct-path and NOLOGGING** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Key terminology

- **redo** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **undo** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **redo log** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **archive log** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **read consistency** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **rollback** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Oracle example

```sql
SELECT name, value FROM v$sysstat
WHERE name IN ('redo size','undo change vector size');
```


## Practical checklist

- Define the business grain or logical unit of work first.
- Use explicit keys, predicates and conversions.
- Validate functional correctness and operational/performance behavior.
- For ETL/DWH, persist batch identifiers, timestamps, status, counts and rejects.
- For production changes, document dependencies, tests and rollback.



## DWH / Data Operations scenario

A banking data flow uses this concept together with audit logging, reconciliation and impact analysis. The solution must be explainable, testable, restartable when applicable, and verifiable through SQL and metadata.
