---
title: 'C03. Oracle Transactions and Concurrency'
---

# C03. Oracle Transactions and Concurrency

<div className="definition">Oracle Transactions and Concurrency matters because it connects data correctness with performance, operations and traceability. A senior Oracle Data Developer should be able to explain the concept, implement it safely, diagnose failures and prove the result after a change.</div>

## Core concepts

- **ACID and transaction boundaries** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **COMMIT, ROLLBACK and SAVEPOINT** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **UNDO, REDO and SCN** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **MVCC and read consistency** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **row locks, blocking and deadlocks** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **READ COMMITTED, SERIALIZABLE and READ ONLY** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **FOR UPDATE, NOWAIT and SKIP LOCKED** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **optimistic vs pessimistic locking and lost updates** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Key terminology

- **ACID** — Atomicity, Consistency, Isolation and Durability.
- **SCN** — System Change Number, Oracle’s logical ordering marker for consistent views and recovery.
- **MVCC** — Multi-Version Concurrency Control; Oracle reconstructs older versions through undo for consistent reads.
- **row lock** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **deadlock** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **read consistency** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **savepoint** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Oracle example

```sql
SAVEPOINT before_transfer;
UPDATE account SET balance = balance - 100 WHERE account_id = 10;
UPDATE account SET balance = balance + 100 WHERE account_id = 20;
COMMIT;
```


## Practical checklist

- Define the business grain or logical unit of work first.
- Use explicit keys, predicates and conversions.
- Validate functional correctness and operational/performance behavior.
- For ETL/DWH, persist batch identifiers, timestamps, status, counts and rejects.
- For production changes, document dependencies, tests and rollback.



## DWH / Data Operations scenario

A banking data flow uses this concept together with audit logging, reconciliation and impact analysis. The solution must be explainable, testable, restartable when applicable, and verifiable through SQL and metadata.
