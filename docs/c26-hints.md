---
title: 'C26. Optimizer Hints'
---

# C26. Optimizer Hints

<div className="definition">Optimizer Hints matters because it connects data correctness with performance, operations and traceability. A senior Oracle Data Developer should be able to explain the concept, implement it safely, diagnose failures and prove the result after a change.</div>

## Core concepts

- **hints influence but do not replace understanding** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **access-path hints FULL and INDEX** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **join-order hints LEADING and ORDERED** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **join-method hints USE_NL and USE_HASH** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **PARALLEL and APPEND** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **transformation hints and cardinality hints** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **verification via outline/hint report and DBMS_XPLAN** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Key terminology

- **hint** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **LEADING** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **USE_HASH** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **USE_NL** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **PARALLEL** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **APPEND** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Oracle example

```sql
SELECT /*+ LEADING(c o) USE_NL(o) INDEX(o ix_orders_customer) */
       o.order_id
FROM customer c JOIN orders o ON o.customer_id = c.customer_id
WHERE c.customer_id = :id;
```


## Practical checklist

- Define the business grain or logical unit of work first.
- Use explicit keys, predicates and conversions.
- Validate functional correctness and operational/performance behavior.
- For ETL/DWH, persist batch identifiers, timestamps, status, counts and rejects.
- For production changes, document dependencies, tests and rollback.



## DWH / Data Operations scenario

A banking data flow uses this concept together with audit logging, reconciliation and impact analysis. The solution must be explainable, testable, restartable when applicable, and verifiable through SQL and metadata.
