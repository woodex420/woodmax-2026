# Master Plan for Woodmax2026

This document outlines the implementation roadmap for merging the storefront and admin systems, creating a unified backend, and preparing for deployment.

## 1. Project Initialization
- Create repo structure (`client`, `server`, `docs`, `scripts`).
- Copy existing source code from `woodex-main` and `woodex frontend` into `client/src-admin` and `client/src-store` respectively.
- Add `package.json` and build scripts for client and server.
- Scaffold a basic Express/Next.js server in `server/src/index.ts`.

## 2. Shared API Abstraction
- Consolidate `master-admin/services/api.ts` into `client/src/services/api.ts`.
- Define API function signatures that both store and admin will use.
- Create TypeScript interfaces using the Supabase `Database` type definitions.
* **Progress:** initial `api.ts` created with products, orders, and customers modules; server-side stubs implemented.

## 3. Client Refactor
- Restructure pages into `src/pages/shop` and `src/pages/admin`.
- Modify imports so public pages use `api` functions.
- Remove direct `supabase` imports progressively.
- Copy any necessary components from admin into shared `components/`.
* **Progress:** shop and admin pages copied into unified `src/pages` directories; shared components and hooks consolidated.

## 4. Server Development
- Implement API routes under `server/pages/api/` (Next.js API routes) matching `api.ts` modules.
	- The initial implementation proxies to Supabase; later the server will hold full business logic.
	- Each route reads optional `x-tenant-id` header for multi-tenant support.
	- Add stubs for WhatsApp CRM (`/api/whatsapp`) and marketplace (`/api/marketplace`).
- Add authentication middleware issuing JWTs/refresh tokens.
- Proxy requests to Supabase initially; later implement business logic internally.
- Add RBAC and tenant support (headers or path parameters).

## 6. Migration Phases
1. **Phase 1 — Read-Only API**: Deploy server with GET handlers; change public pages accordingly.
2. **Phase 2 — Full CRUD**: Add POST/PUT/DELETE; convert forms.
3. **Phase 3 — Cutover**: Remove legacy Supabase imports; set feature flags to disable old code.

### Example: Adding Knowledge Base
- Public page already exists (`src/pages/shop/KnowledgeBase.tsx`).
- Backend route created at `/api/knowledge` (GET/POST).
- Shared API module updated with `knowledge.list()` and `knowledge.create()`.
- Admin page `src/pages/admin/KnowledgePage.tsx` added and route wired under `/admin/knowledge`.
- This demonstrates how a new frontend feature is managed through the master admin.

## 6. Deployment Strategy
- Use Vercel for client and server or combine in Next.js monorepo.
- Setup GitHub Actions to lint, typecheck, run tests, and deploy.
- Configure environment variables (`SUPABASE_URL`, `API_SECRET`, etc.).
- Document rollback procedures and staging/production workflows.

## 7. Testing & Monitoring
- Add unit tests for API functions and routes.
- Add integration tests for login, order creation, etc.
- Integrate Sentry or similar for error tracking.
- Monitor performance with Prometheus/Datadog.

## 8. Future Enhancements
- Payment integration (Stripe/PayPal).
- WhatsApp CRM automation.
- Multi-tenant marketplace architecture.
- API keys for third-party apps.
* **Note:** Next.js API routes now power the backend; public API exposure is acceptable and will be secured via JWT and rate limiting.

Refer to other documentation files for detailed instructions.
