---
title: 'C33. Data Modeling'
---

# C33. Data Modeling

<div className="definition">Data Modeling matters because it connects data correctness with performance, operations and traceability. A senior Oracle Data Developer should be able to explain the concept, implement it safely, diagnose failures and prove the result after a change.</div>

## Core concepts

- **conceptual, logical and physical models** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **entities, attributes, relationships and cardinality** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **normalization for OLTP** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **dimensional modeling for analytics** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **natural vs surrogate keys** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **grain definition before fact design** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **banking entities and source-to-target mapping** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Key terminology

- **conceptual model** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **logical model** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **physical model** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **cardinality** — The estimated or actual row count produced by a row source.
- **normalization** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **dimensional model** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **grain** — The exact business meaning represented by one row.

## Oracle example

```sql
CREATE TABLE account (
  account_id NUMBER PRIMARY KEY,
  customer_id NUMBER NOT NULL,
  iban VARCHAR2(34) UNIQUE,
  status VARCHAR2(20) NOT NULL
);
```


## Practical checklist

- Define the business grain or logical unit of work first.
- Use explicit keys, predicates and conversions.
- Validate functional correctness and operational/performance behavior.
- For ETL/DWH, persist batch identifiers, timestamps, status, counts and rejects.
- For production changes, document dependencies, tests and rollback.



## DWH / Data Operations scenario

A banking data flow uses this concept together with audit logging, reconciliation and impact analysis. The solution must be explainable, testable, restartable when applicable, and verifiable through SQL and metadata.
