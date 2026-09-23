---
title: 'C35. CDC — Change Data Capture'
---

# C35. CDC — Change Data Capture

<div className="definition">CDC — Change Data Capture matters because it connects data correctness with performance, operations and traceability. A senior Oracle Data Developer should be able to explain the concept, implement it safely, diagnose failures and prove the result after a change.</div>

## Core concepts

- **capturing inserts, updates and deletes** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **log-based vs trigger/timestamp-based CDC** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **SCN/watermark concepts** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **ODI Journalizing / JKM concepts** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **ordering, duplicates and exactly-once illusions** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **late arriving changes and replay** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **CDC to staging and downstream MERGE/SCD** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Key terminology

- **CDC** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **change log** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **watermark** — A high-water mark delimiting already processed data from new incremental data.
- **SCN** — System Change Number, Oracle’s logical ordering marker for consistent views and recovery.
- **journalizing** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.
- **late-arriving data** — A core term in this chapter that should be understood both conceptually and through its effect on Oracle execution, data quality or operations.

## Oracle example

```sql
MERGE INTO target_account t
USING cdc_account s
ON (t.account_id = s.account_id)
WHEN MATCHED THEN UPDATE SET t.status = s.status
WHEN NOT MATCHED THEN INSERT(account_id,status) VALUES(s.account_id,s.status);
```


![CDC — Change Data Capture](/img/cdc_pipeline.png)


## Practical checklist

- Define the business grain or logical unit of work first.
- Use explicit keys, predicates and conversions.
- Validate functional correctness and operational/performance behavior.
- For ETL/DWH, persist batch identifiers, timestamps, status, counts and rejects.
- For production changes, document dependencies, tests and rollback.



## DWH / Data Operations scenario

A banking data flow uses this concept together with audit logging, reconciliation and impact analysis. The solution must be explainable, testable, restartable when applicable, and verifiable through SQL and metadata.
