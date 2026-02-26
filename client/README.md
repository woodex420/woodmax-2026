# Woodmax2026 Client

This directory contains the React frontend for both the storefront and admin dashboard.
The UI uses Vite for development and builds static assets, while the backend API is implemented in a Next.js application located at `../server`.

## Commands

- `pnpm install` – install dependencies
- `pnpm run dev` – start development server (Vite with proxy to API)
- `pnpm run build` – build production assets
- `pnpm run lint` – run ESLint

The previous Woodex frontend and master-admin code bases have been merged. Pages are now organised under:

```
src/
├── pages/
│   ├── shop/      # public storefront routes
│   └── admin/     # admin dashboard routes
├── components/    # shared UI components
├── hooks/         # shared React hooks
├── services/      # shared API abstraction
└── layouts/       # layout components
```

Use the shared `api` object (`src/services/api.ts`) to make backend calls; some legacy pages still reference static data for now.

Refer to the root README and `docs/MASTER_PLAN.md` for detailed architecture, migration steps, and deployment instructions.
