---
alwaysApply: true
---

# Database Access

Database interactions must always use Drizzle schema objects and Drizzle query builders.

- Use the shared database client from [src/db/index.ts](md:src/db/index.ts).
- Import tables and inferred types from [src/db/schema.ts](md:src/db/schema.ts).
- Build reads and writes with Drizzle APIs such as `db.select()`, `db.insert()`, `db.update()`, `db.delete()`, `db.query`, and predicates from `drizzle-orm`.
- Do not use raw SQL strings or the underlying Neon client directly for application data access unless the user explicitly requests a migration or one-off administrative operation.
