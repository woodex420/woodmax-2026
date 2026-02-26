# Deployment Guide for Woodmax2026

This guide covers building and deploying the combined storefront + admin application using Next.js for the API and Vite for the client (temporary during migration).

## Environment Variables

### Client (`client/.env`)
```
VITE_SUPABASE_URL=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
VITE_API_URL=https://api.mydomain.com/api
```

### Server (`server/.env`)
```
PORT=4000             # or omitted when deployed on platform
CLIENT_URL=https://app.mydomain.com
SUPABASE_URL=...
SUPABASE_KEY=...
JWT_SECRET=supersecret
```

## Build Steps

### Local Development
1. Start server:
   ```bash
   cd server
   pnpm install
   pnpm run dev   # runs Next.js on port 4000
   ```
2. Start client:
   ```bash
   cd client
   pnpm install
   pnpm run dev   # Vite frontend on 5173 with proxy
   ```

### Production Build
1. Build server
   ```bash
   cd server
   pnpm install --frozen-lockfile
   pnpm run build
   ```
2. Build client
   ```bash
   cd client
   pnpm install --frozen-lockfile
   pnpm run build
   ```
3. Deploy using your chosen platform (Vercel, Render, Heroku, etc.).
   - For Vercel you can deploy the entire `woodmax2026` directory; it will detect the Next.js app in `server` and static assets in `client`.
   - Alternatively host server separately and serve client as static site.

## CI/CD
- Use GitHub Actions to run `pnpm lint`, `pnpm run build` in both subfolders, and optionally unit tests.

## Rollback
- Keep previous deployment artifacts around.
- In case of failure revert to prior commit and redeploy.

## Monitoring
- Configure Sentry for frontend and server.
- Add Prometheus/Datadog metrics within Next.js API routes.

## Notes
- Ensure CORS settings allow your client domain.
- When switching off Supabase, update API routes to point at new persistence.
