---
title: 'C37. Reconciliation'
---

# C37. Reconciliation

<div className="definition">Reconciliation matters because it connects data correctness with performance, operations and traceability. A senior Oracle Data Developer should be able to explain the concept, implement it safely, diagnose failures and prove the result after a change.</div>

## Core concepts

- **proving source and target agreement** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **record counts, sums and control totals** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **key-set comparison with MINUS** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **hash/checksum and aggregate comparison** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **tolerance and currency/rounding rules** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **reject accounting and balance equations** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **batch sign-off and audit evidence** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Key terminology

- **reconciliation** — Evidence that source and target agree according to explicit rules.
- **control total** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **tolerance** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **reject count** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **balance check** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Oracle example

```sql
SELECT 'SRC_MINUS_TGT' src, account_id FROM src_account
MINUS
SELECT 'SRC_MINUS_TGT', account_id FROM dim_account;
```


## Practical checklist

- Define the business grain or logical unit of work first.
- Use explicit keys, predicates and conversions.
- Validate functional correctness and operational/performance behavior.
- For ETL/DWH, persist batch identifiers, timestamps, status, counts and rejects.
- For production changes, document dependencies, tests and rollback.



## DWH / Data Operations scenario

A banking data flow uses this concept together with audit logging, reconciliation and impact analysis. The solution must be explainable, testable, restartable when applicable, and verifiable through SQL and metadata.
