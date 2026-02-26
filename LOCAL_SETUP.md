# 🚀 Woodex Local Development Guide

## Quick Start

### 1. Prerequisites
- Node.js 18+ and pnpm installed
- Supabase account and project created
- `.env` files configured with Supabase credentials

### 2. Configure Environment

#### Server Configuration (server/.env)
```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_KEY=your_service_key
JWT_SECRET=any_secret_string_here
NODE_ENV=development
```

#### Client Configuration (client/.env)
```env
VITE_API_URL=http://localhost:4000/api
```

### 3. Create Test User in Supabase

In Supabase dashboard:
1. Go to Authentication → Users
2. Create a new user with:
   - Email: `admin@woodex.com`
   - Password: `admin123456`
3. (Optional) Set user metadata in user details:
   ```json
   {
     "display_name": "Admin User"
   }
   ```

### 4. Run Development Servers

```bash
# From project root
./dev.sh
```

Or manually:

```bash
# Terminal 1: Start API server
cd server
pnpm dev
# Server runs on http://localhost:4000

# Terminal 2: Start client
cd client
pnpm dev
# Client runs on http://localhost:5173
```

### 5. Access Application

- **Store**: http://localhost:5173
- **Admin**: http://localhost:5173/admin
- **API Docs**: http://localhost:4000/api

### 6. Login

Use credentials:
- **Email**: `admin@woodex.com`
- **Password**: `admin123456`

## Architecture

### Frontend (React + Vite)
- **Port**: 5173
- **Location**: `client/`
- **Key Files**:
  - `src/contexts/AuthContext.tsx` - Global auth state
  - `src/services/api.ts` - API client with token management
  - `src/pages/shop/LoginPage.tsx` - Login/signup form
  - `src/components/ProtectedRoute.tsx` - Route protection

### Backend (Next.js)
- **Port**: 4000
- **Location**: `server/`
- **Key Endpoints**:
  - `POST /api/auth/login` - User login
  - `POST /api/auth/signup` - User registration
  - `POST /api/auth/logout` - User logout
  - `GET /api/auth/session` - Check session
  - `GET /api/products` - List products
  - `GET /api/orders` - List orders

## Features Implemented

✅ **Authentication System**
- Login with email/password
- Signup with display name
- JWT token management
- Session persistence via localStorage
- Logout functionality

✅ **Protected Routes**
- Admin section (`/admin/*`) requires login
- Automatic redirect to login for unauthenticated users
- Session check on app load

✅ **Admin Interface**
- User greeting with display name
- Logout button in header
- Sidebar navigation (Dashboard, Products, Knowledge Base)
- Responsive design with mobile menu

✅ **API Integration**
- Shared API abstraction layer
- Token-based authorization
- Multi-tenant ready (x-tenant-id header)
- Error handling and validation

## Development Workflow

### Adding a New Admin Page

1. Create page in `client/src/pages/admin/MyPage.tsx`
2. Add route in `App.tsx`:
   ```tsx
   <Route path="my-page" element={<MyPage />} />
   ```
3. Add sidebar link in `AdminLayout.tsx`:
   ```tsx
   <a href="/admin/my-page" className="block px-4 py-2 rounded-lg hover:bg-gray-100">
     My Page
   </a>
   ```

### Adding a New API Route

1. Create handler in `server/pages/api/my-endpoint.ts`
2. Add module to `client/src/services/api.ts`:
   ```tsx
   export const myModule = {
     list: () => request('/my-endpoint'),
     create: (data) => request('/my-endpoint', { method: 'POST', body: JSON.stringify(data) }),
   };
   ```
3. Use in components:
   ```tsx
   const data = await api.myModule.list();
   ```

### Debugging

#### Check Auth State
```typescript
// In browser console
localStorage.getItem('auth_token')
```

#### API Calls
- Open DevTools Network tab
- Look for requests to `http://localhost:4000/api/*`
- Check response status and body

#### Server Logs
- Terminal running `pnpm dev` in `server/` folder
- Shows all incoming requests and errors

## Troubleshooting

### "Invalid Supabase credentials"
- Check `server/.env` has correct `SUPABASE_URL` and keys
- Verify Supabase project is active

### "401 Unauthorized"
- Check token is being stored: `localStorage.getItem('auth_token')`
- Verify user exists in Supabase with correct password

### "CORS errors"
- API proxy should handle this
- Check `client/vite.config.ts` has `/api` proxy configured
- Make sure server is running on 4000

### Admin page shows "Loading..."
- Check browser console for errors
- Verify auth token is valid: `api.auth.getSession()`
- Check Network tab for failed requests

## Next Steps

1. **GitHub Setup** - Push to GitHub repository
2. **Vercel Deployment** - Deploy server and client to Vercel
3. **Database** - Configure Supabase with proper schema
4. **Additional Features** - Products, orders, quotations management

See `DEPLOYMENT_GUIDE.md` for production deployment steps.
