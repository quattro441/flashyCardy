---
alwaysApply: true
---

# Server Data Flow

Data retrieval must always happen in Server Components, and database mutations must always happen in Server Actions.

- Fetch application data in Server Components using the shared Drizzle client from [src/db/index.ts](md:src/db/index.ts) and schema objects from [schema.ts](md:src/db/schema.ts).
- Do not fetch database-backed application data directly from Client Components.
- Perform all database inserts, updates, and deletes in Server Actions.
- Validate all server action input with Zod before using it in a database query or mutation.
- Give every server action input a TypeScript type. Do not type server action input as `FormData`.
- If a form posts to a server action, convert the submitted data into a typed object at the boundary, validate that object with Zod, and only then call Drizzle.
- Keep server actions aligned with the Clerk data isolation rule: authenticate with Clerk and scope user-owned mutations to the authenticated Clerk `userId`.
