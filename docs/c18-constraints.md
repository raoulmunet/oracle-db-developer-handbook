---
title: 'C18. Constraints and Data Integrity'
---

# C18. Constraints and Data Integrity

<div className="definition">Constraints and Data Integrity matters because it connects data correctness with performance, operations and traceability. A senior Oracle Data Developer should be able to explain the concept, implement it safely, diagnose failures and prove the result after a change.</div>

## Core concepts

- **PRIMARY KEY, UNIQUE, FOREIGN KEY, CHECK and NOT NULL** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **entity and referential integrity** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **immediate vs deferred constraints** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **enabled/disabled and validated/novalidated states** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **constraint-backed indexes** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **ETL loading strategies without weakening correctness** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Key terminology

- **constraint** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **primary key** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **foreign key** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **check constraint** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **deferred constraint** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Oracle example

```sql
ALTER TABLE account ADD CONSTRAINT fk_account_customer
FOREIGN KEY(customer_id) REFERENCES customer(customer_id);
```


## Practical checklist

- Define the business grain or logical unit of work first.
- Use explicit keys, predicates and conversions.
- Validate functional correctness and operational/performance behavior.
- For ETL/DWH, persist batch identifiers, timestamps, status, counts and rejects.
- For production changes, document dependencies, tests and rollback.



## DWH / Data Operations scenario

A banking data flow uses this concept together with audit logging, reconciliation and impact analysis. The solution must be explainable, testable, restartable when applicable, and verifiable through SQL and metadata.
