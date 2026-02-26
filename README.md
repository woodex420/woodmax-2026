# 🏪 Woodex - Admin + Store Platform

A unified e-commerce system combining a **public furniture store** with an **admin management dashboard**. Built with React, Next.js, TypeScript, and Supabase.

## ✨ Features

✅ **Public Store Interface**
- Product browsing and search
- Detailed product pages
- Shopping cart and checkout
- Customer knowledge base

✅ **Admin Dashboard** (Protected)
- Dashboard with analytics
- Product management (CRUD)
- Order management
- Knowledge base editor
- User management

✅ **Authentication System**
- Email/password login
- User registration
- JWT token-based auth
- Session persistence
- Protected routes

✅ **Developer Features**
- Full TypeScript support
- Shared API abstraction layer
- Hot module reloading (HMR)
- Zero-config deployment ready
- Multi-tenant architecture (ready)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm installed
- Supabase account (free)

### Installation (5 minutes)

```bash
# 1. Configure environment
cp server/.env.example server/.env
cp client/.env.example client/.env

# 2. Add your Supabase credentials to server/.env
# Get from: https://supabase.com/dashboard/project/_/settings/api

# 3. Create test user in Supabase
# Go to Authentication → Users → Create user
# Email: admin@woodex.com
# Password: admin123456

# 4. Start both servers
./dev.sh
```

### Access the Application
- 🏪 **Store**: http://localhost:5173
- 🔐 **Admin**: http://localhost:5173/admin
- 🔌 **API**: http://localhost:4000/api

### Login
```
Email: admin@woodex.com
Password: admin123456
```

## 📁 Project Structure

```
woodmax2026/
├── client/                          # React Frontend (Vite)
│   ├── src/
│   │   ├── pages/shop/             # Public store pages
│   │   ├── pages/admin/            # Admin dashboard pages (protected)
│   │   ├── components/             # Shared UI components
│   │   ├── layouts/                # Layout components
│   │   ├── contexts/AuthContext.tsx # Global auth state
│   │   ├── services/api.ts         # API client abstraction
│   │   └── App.tsx                 # Routing setup
│   └── package.json
│
├── server/                          # Next.js API Backend
│   ├── pages/api/
│   │   ├── auth/                   # Authentication endpoints
│   │   │   ├── login.ts
│   │   │   ├── signup.ts
│   │   │   ├── logout.ts
│   │   │   └── session.ts
│   │   ├── products.ts             # Product management
│   │   ├── orders.ts               # Order management
│   │   ├── customers.ts
│   │   ├── knowledge.ts            # Knowledge base CMS
│   │   ├── whatsapp.ts             # WhatsApp integration
│   │   └── marketplace.ts          # Multi-vendor stub
│   ├── next.config.js
│   ├── tsconfig.json
│   └── package.json
│
├── docs/
│   ├── MASTER_PLAN.md             # Architecture & roadmap
│   └── DEPLOYMENT_GUIDE.md        # Production deployment
│
├── LOCAL_SETUP.md                 # Detailed local development guide
├── dev.sh                          # One-command server launcher
└── README.md                       # This file
```

## 🔐 Authentication

### How It Works

1. **Login** → User submits email/password
2. **Validate** → Server verifies with Supabase
3. **Token** → JWT token returned and stored in localStorage
4. **Protected Routes** → Admin routes check for valid token
5. **Auto-Restore** → Session persists across page reloads

### Protected Routes

The admin section (`/admin/*`) is automatically protected:
```tsx
<Route 
  path="/admin" 
  element={<ProtectedRoute element={<AdminLayout />} />}
>
  {/* nested admin pages */}
</Route>
```

Unauthenticated users are redirected to `/login`.

## 🛠️ Technology Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React 18, TypeScript, Vite, React Router v6, TailwindCSS, shadcn/ui |
| **Backend** | Next.js 14, TypeScript, Express (optional middleware) |
| **Database** | Supabase (PostgreSQL) with JWT Auth |
| **Tools** | pnpm, ESLint, TypeScript |

## 📡 API Examples

### Login
```bash
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@woodex.com","password":"admin123456"}'
```

### Get Products
```bash
curl http://localhost:4000/api/products
```

### Protected Endpoint
```bash
curl -H "Authorization: Bearer <token>" \
  http://localhost:4000/api/auth/session
```

## 🧑‍💻 Component Usage

### Using Authentication

```tsx
import { useAuth } from '@/contexts/AuthContext';

export default function Profile() {
  const { user, logout } = useAuth();
  
  return (
    <div>
      <p>Hello, {user?.displayName}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

### Using API

```tsx
import { api } from '@/services/api';

const products = await api.products.list();
const product = await api.products.getById('123');
await api.knowledge.create({ title: 'New Article', content: '...' });
```

## ⚙️ Configuration

### Client (.env)
```env
VITE_API_URL=http://localhost:4000/api
```

### Server (.env)
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_KEY=your-service-key
JWT_SECRET=your-secret
NODE_ENV=development
```

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy Client**
   - Connect GitHub repo to Vercel
   - Set root directory to `client`
   - Deploy

3. **Deploy Server**
   - Create new Vercel project
   - Set root directory to `server`
   - Configure environment variables
   - Deploy

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

## 📚 Documentation

- **Local Setup** → `LOCAL_SETUP.md` (comprehensive development guide)
- **Architecture** → `docs/MASTER_PLAN.md` (system design & roadmap)
- **Deployment** → `DEPLOYMENT_GUIDE.md` (production deployment)

## 🐛 Troubleshooting

**Q: Login button does nothing**
- Check browser console (F12) for errors
- Verify `server/.env` has correct Supabase credentials
- Ensure server is running on port 4000

**Q: Admin page shows loading spinner**
- Check Network tab in DevTools
- Look for failed requests to `/api/auth/session`
- Verify token exists: `localStorage.getItem('auth_token')`

**Q: CORS errors**
- This shouldn't happen! The client proxies `/api` to `localhost:4000`
- Check `client/vite.config.ts` for proxy configuration

**Q: Can't create account**
- Verify Supabase authentication is enabled
- Check that user with that email doesn't already exist
- Review server logs for Supabase errors

## 📞 Support

For issues or questions:
1. Check the documentation files
2. Review inline code comments
3. Check browser DevTools (F12) for errors
4. Review server logs in terminal

## 🎯 Next Phase

- Push to GitHub repository
- Deploy to Vercel
- Configure Supabase database schema
- Add product management UI
- Implement order processing

---

**Ready to get started?** Run `./dev.sh` and start building! 🚀
3. Migrate pages incrementally to call `api.*` instead of Supabase directly.
4. Create documentation in `docs/` for deployment, migration, and architecture.

See `docs/MASTER_PLAN.md` for the full implementation and deployment strategy.
