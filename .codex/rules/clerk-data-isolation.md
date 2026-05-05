---
alwaysApply: true
---

# Clerk Auth And Data Isolation

All authentication is handled by Clerk, and users must only be able to access their own data.

- Use Clerk server auth from `@clerk/nextjs/server` for server components, route handlers, and server actions. In this project, `auth()` is async and must be awaited.
- Require an authenticated Clerk user before reading or mutating user-owned data. Treat missing authentication as an access failure.
- Scope every user-owned Drizzle query by the authenticated Clerk `userId`, using schema columns such as `decksTable.clerkUserId` from [schema.ts](md:src/db/schema.ts).
- For nested data, verify ownership through the parent record. For example, card access must be constrained through the owning deck's `clerkUserId`, not just the card id.
- Never trust client-provided user ids, deck ownership, or organization ownership for authorization decisions.
- Keep auth and data access consistent with the Clerk middleware in [proxy.ts](md:src/proxy.ts) and the Drizzle database rule.
