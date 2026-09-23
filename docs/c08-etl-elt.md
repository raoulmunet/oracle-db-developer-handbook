---
title: 'C08. ETL / ELT'
---

# C08. ETL / ELT

<div className="definition">ETL / ELT matters because it connects data correctness with performance, operations and traceability. A senior Oracle Data Developer should be able to explain the concept, implement it safely, diagnose failures and prove the result after a change.</div>

## Core concepts

- **extract-transform-load vs extract-load-transform** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **landing, staging and target layers** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **source-to-target mappings** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **incremental extraction and watermarks** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **reject handling, restartability and idempotency** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **set-based transformations and orchestration** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Key terminology

- **ETL** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **ELT** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **staging** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **watermark** — A high-water mark delimiting already processed data from new incremental data.
- **source-to-target mapping** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **reject table** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Oracle example

```sql
MERGE INTO dim_currency d
USING stg_currency s
ON (d.currency_cd = s.currency_cd)
WHEN MATCHED THEN UPDATE SET d.currency_name = s.currency_name
WHEN NOT MATCHED THEN INSERT(currency_sk,currency_cd,currency_name)
VALUES(seq_currency.NEXTVAL,s.currency_cd,s.currency_name);
```


## Practical checklist

- Define the business grain or logical unit of work first.
- Use explicit keys, predicates and conversions.
- Validate functional correctness and operational/performance behavior.
- For ETL/DWH, persist batch identifiers, timestamps, status, counts and rejects.
- For production changes, document dependencies, tests and rollback.



## DWH / Data Operations scenario

A banking data flow uses this concept together with audit logging, reconciliation and impact analysis. The solution must be explainable, testable, restartable when applicable, and verifiable through SQL and metadata.
