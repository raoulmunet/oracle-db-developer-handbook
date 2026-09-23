---
title: 'C07. Slowly Changing Dimensions (SCD)'
---

# C07. Slowly Changing Dimensions (SCD)

<div className="definition">Slowly Changing Dimensions (SCD) matters because it connects data correctness with performance, operations and traceability. A senior Oracle Data Developer should be able to explain the concept, implement it safely, diagnose failures and prove the result after a change.</div>

## Core concepts

- **SCD Type 0, 1, 2 and hybrid approaches** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **business key vs surrogate key** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **valid_from, valid_to and current flag** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **detecting attribute changes** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **closing the old version and inserting the new version** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **point-in-time joins from facts to dimensions** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Key terminology

- **SCD** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **SCD Type 1** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **SCD Type 2** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **business key** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **surrogate key** — A generated technical key with no business semantics.
- **effective dating** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Oracle example

```sql
UPDATE dim_customer d
SET valid_to = :change_ts, is_current = 'N'
WHERE d.customer_id = :customer_id AND d.is_current = 'Y';

INSERT INTO dim_customer(customer_sk, customer_id, segment, valid_from, valid_to, is_current)
VALUES(seq_customer.NEXTVAL, :customer_id, :segment, :change_ts, DATE '9999-12-31', 'Y');
```


## Practical checklist

- Define the business grain or logical unit of work first.
- Use explicit keys, predicates and conversions.
- Validate functional correctness and operational/performance behavior.
- For ETL/DWH, persist batch identifiers, timestamps, status, counts and rejects.
- For production changes, document dependencies, tests and rollback.



## DWH / Data Operations scenario

A banking data flow uses this concept together with audit logging, reconciliation and impact analysis. The solution must be explainable, testable, restartable when applicable, and verifiable through SQL and metadata.
