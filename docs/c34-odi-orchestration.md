---
title: 'C34. ODI / ETL Orchestration'
---

# C34. ODI / ETL Orchestration

<div className="definition">ODI / ETL Orchestration matters because it connects data correctness with performance, operations and traceability. A senior Oracle Data Developer should be able to explain the concept, implement it safely, diagnose failures and prove the result after a change.</div>

## Core concepts

- **ODI repositories, topology, contexts and agents** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **models, datastores and mappings** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **Knowledge Modules: RKM, LKM, IKM, CKM, JKM** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **packages, scenarios and load plans** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **variables, dependencies and scheduling** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **restartability, idempotency and error handling** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **watermarks, SCD2, reconciliation and operational monitoring** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Key terminology

- **ODI** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **Knowledge Module** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **LKM** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **IKM** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **CKM** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **scenario** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **load plan** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **agent** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Oracle example

```sql
-- Control-table pattern used by an ODI package/load plan
UPDATE etl_batch
SET status = 'RUNNING', start_ts = SYSTIMESTAMP
WHERE batch_id = :batch_id;
```


![ODI / ETL Orchestration](/img/odi_orchestration.png)


## Practical checklist

- Define the business grain or logical unit of work first.
- Use explicit keys, predicates and conversions.
- Validate functional correctness and operational/performance behavior.
- For ETL/DWH, persist batch identifiers, timestamps, status, counts and rejects.
- For production changes, document dependencies, tests and rollback.



## DWH / Data Operations scenario

A banking data flow uses this concept together with audit logging, reconciliation and impact analysis. The solution must be explainable, testable, restartable when applicable, and verifiable through SQL and metadata.
