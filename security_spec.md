# Security Specification

## 1. Data Invariants
1. A project document cannot exist without a valid `ownerId` matching `request.auth.uid`.
2. A user can only access, create, update, or delete their own projects.
3. Subcollection documents (`criteria`) must reference a valid parent `projectId` where the current user is the owner.
4. Document IDs must conform to regex `^[a-zA-Z0-9_\\-]+$` and size <= 128 chars.
5. All string fields have strict bounded size constraints to prevent Denial-of-Wallet attacks.
6. The `ownerId` and `createdAt` fields are immutable once written.

## 2. The "Dirty Dozen" Test Payloads
1. Unauthorized Project Creation: Write without authentication.
2. Identity Spoofing: Write `ownerId: 'victim-uid'` as an authenticated user with a different UID.
3. Over-length Title: Title exceeding 100 characters.
4. Ghost Field Injection: Adding an unallowed field `adminOverride: true`.
5. Path Traversal ID: Writing to document ID `../../system/hack`.
6. Orphan Subcollection: Writing to `/projects/{projectId}/criteria/{id}` where parent project does not exist.
7. Cross-Tenant Subcollection: Writing to another user's project subcollection.
8. Immutable Field Mutation: Attempting to modify `ownerId` on project update.
9. Blank Read: Querying all projects without scoping to `resource.data.ownerId == request.auth.uid`.
10. Negative Weight: Setting criterion weight < 0 or > 100.
11. Script Injection in Title: Sending a 50KB payload in description.
12. Unverified Email Bypass: Write operation attempted without verified email where required.
