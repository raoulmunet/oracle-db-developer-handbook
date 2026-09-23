---
title: 'C30. CDB / PDB — Oracle Multitenant'
---

# C30. CDB / PDB — Oracle Multitenant

<div className="definition">CDB / PDB — Oracle Multitenant matters because it connects data correctness with performance, operations and traceability. A senior Oracle Data Developer should be able to explain the concept, implement it safely, diagnose failures and prove the result after a change.</div>

## Core concepts

- **CDB root, PDBs and containers** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **common vs local users** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **services and connection routing** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **container-aware data dictionary views** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **opening/closing PDBs** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **privilege scope and common objects** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **ETL jobs connecting to the correct service** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Key terminology

- **CDB** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **PDB** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **container** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **common user** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **local user** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **service name** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Oracle example

```sql
SELECT SYS_CONTEXT('USERENV','CON_NAME') container_name,
       SYS_CONTEXT('USERENV','SERVICE_NAME') service_name
FROM dual;
```


![CDB / PDB — Oracle Multitenant](/img/multitenant.png)


## Practical checklist

- Define the business grain or logical unit of work first.
- Use explicit keys, predicates and conversions.
- Validate functional correctness and operational/performance behavior.
- For ETL/DWH, persist batch identifiers, timestamps, status, counts and rejects.
- For production changes, document dependencies, tests and rollback.



## DWH / Data Operations scenario

A banking data flow uses this concept together with audit logging, reconciliation and impact analysis. The solution must be explainable, testable, restartable when applicable, and verifiable through SQL and metadata.
