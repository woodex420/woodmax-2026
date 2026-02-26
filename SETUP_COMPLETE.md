# 🚀 Woodex Platform - Complete Setup & Deployment Guide

## Project Status: ✅ LOCALLY RUNNING

Your Woodex e-commerce platform is now fully configured and running locally with complete authentication system.

---

## 🎯 Quick Start

### Start Local Development Servers
```bash
cd /Users/macbook/Desktop/woodex-main/woodmax2026
./dev.sh
```

**Servers will start on:**
- 🏪 Store Frontend: http://localhost:5173
- 🔐 Admin Panel: http://localhost:5173/admin
- 🔌 API Server: http://localhost:4000/api

**Demo Login Credentials:**
- Email: `admin@woodex.com`
- Password: `admin123456`

---

## 📋 What's Included

### ✅ Authentication System (Complete)
- User login/signup with email & password
- JWT token-based authentication
- Protected admin routes with auto-redirect
- Session persistence using localStorage
- Logout functionality

### ✅ Backend API (Complete)
- **Auth Routes:**
  - `POST /api/auth/login` - User login
  - `POST /api/auth/signup` - User registration
  - `POST /api/auth/logout` - User logout
  - `GET /api/auth/session` - Session validation

- **CRUD Routes:**
  - `/api/products` - Product management
  - `/api/orders` - Order management
  - `/api/customers` - Customer data
  - `/api/knowledge` - Knowledge base
  - `/api/marketplace` - Marketplace
  - `/api/whatsapp` - WhatsApp integration

### ✅ Frontend Components (Complete)
- LoginPage with signup toggle
- Protected admin routes
- Admin dashboard with user greeting
- Responsive sidebar navigation
- Global authentication context

### ✅ Developer Tools (Complete)
- `dev.sh` - One-command startup script
- `.gitignore` - Git configuration
- Environment file auto-creation
- Automatic dependency checking
- Colored console output with status messages

---

## 🔧 Configuration

### Server Environment (.env)
Located at: `server/.env`

```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_KEY=your_service_key
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

### Client Environment (.env)
Located at: `client/.env`

```
VITE_API_URL=http://localhost:4000/api
```

---

## 📁 Project Structure

```
woodmax2026/
├── dev.sh                          # Local development launcher
├── .gitignore                      # Git ignore patterns
├── package.json                    # Workspace root
│
├── server/                         # Next.js API server (port 4000)
│   ├── pages/api/
│   │   ├── auth/
│   │   │   ├── login.ts
│   │   │   ├── signup.ts
│   │   │   ├── logout.ts
│   │   │   └── session.ts
│   │   ├── products.ts
│   │   ├── orders.ts
│   │   └── ...
│   ├── next.config.cjs
│   ├── package.json
│   └── tsconfig.json
│
├── client/                         # Vite + React (port 5173)
│   ├── src/
│   │   ├── pages/
│   │   │   └── shop/
│   │   │       └── LoginPage.tsx
│   │   ├── components/
│   │   │   └── ProtectedRoute.tsx
│   │   ├── layouts/
│   │   │   └── AdminLayout.tsx
│   │   ├── contexts/
│   │   │   └── AuthContext.tsx
│   │   ├── services/
│   │   │   └── api.ts
│   │   └── App.tsx
│   ├── package.json
│   └── tsconfig.json
│
└── docs/                           # Documentation
    ├── design-tokens.json
    └── ...
```

---

## 🧪 Testing

### Test Login Flow
1. Open http://localhost:5173
2. Click "Login" or navigate to `/admin`
3. Use credentials:
   - Email: `admin@woodex.com`
   - Password: `admin123456`
4. Verify dashboard loads with user greeting

### Test API Endpoints
```bash
# Test login endpoint
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@woodex.com","password":"admin123456"}'

# Test protected routes
curl -X GET http://localhost:4000/api/products \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

## 📦 GitHub Setup (Next Step)

### 1. Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `woodex-ecommerce`
3. Description: "Complete e-commerce platform with authentication"
4. Choose public or private
5. Click "Create repository"

### 2. Add Remote & Push
```bash
cd /Users/macbook/Desktop/woodex-main/woodmax2026

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/woodex-ecommerce.git

# Rename branch if needed (GitHub default is 'main')
git branch -M main

# Push to GitHub
git push -u origin main
```

### 3. Verify Push
Check your GitHub repository to confirm all files are uploaded.

---

## 🌐 Vercel Deployment (After GitHub)

### 1. Connect to Vercel
1. Go to https://vercel.com/new
2. Select "Import Git Repository"
3. Choose your GitHub repo `woodex-ecommerce`

### 2. Configure Project Settings
- **Framework**: Next.js (auto-detected)
- **Root Directory**: `server/`
- **Build Command**: `pnpm build` or `next build`
- **Output Directory**: `.next`

### 3. Environment Variables
Add to Vercel project settings:
```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_KEY=your_service_key
JWT_SECRET=your_jwt_secret
```

### 4. Deploy Frontend
Deploy client separately using Vercel:
1. Create new Vercel project
2. Select same GitHub repo
3. Root Directory: `client/`
4. Framework: Vite
5. Build Command: `pnpm build`

---

## 🔒 Production Checklist

- [ ] Replace demo credentials with real users
- [ ] Update Supabase credentials (production database)
- [ ] Set strong JWT_SECRET
- [ ] Enable HTTPS/SSL
- [ ] Configure CORS properly
- [ ] Set up database backups
- [ ] Configure error logging
- [ ] Set up monitoring/analytics
- [ ] Test all authentication flows
- [ ] Load testing
- [ ] Security audit

---

## 📝 Git History

```
198b8f1a Add .gitignore to exclude node_modules, logs, and environment files
4aa6b48c Fix: Rename next.config.js to next.config.cjs (ESM compatibility) and fix dev.sh script
26eae7d3 Initial commit: Complete Woodex e-commerce platform with authentication system
```

---

## 🛠️ Troubleshooting

### Dev.sh won't start
```bash
# Make it executable
chmod +x dev.sh

# Run with bash
bash ./dev.sh
```

### Port already in use
```bash
# Kill process on port 4000
lsof -i :4000 | grep LISTEN | awk '{print $2}' | xargs kill -9

# Kill process on port 5173
lsof -i :5173 | grep LISTEN | awk '{print $2}' | xargs kill -9
```

### Clear dependencies
```bash
rm -rf client/node_modules server/node_modules
pnpm install
```

### View logs
```bash
tail -f /tmp/woodex-server.log
tail -f /tmp/woodex-client.log
```

---

## 📞 Support

For questions about authentication, API endpoints, or deployment:
1. Check the specific documentation files in `/docs`
2. Review the API endpoint implementations in `server/pages/api/`
3. Check the React components in `client/src/`

---

## 🎉 Next Steps

1. ✅ Test locally with `./dev.sh`
2. ⏳ Push to GitHub (instructions above)
3. ⏳ Deploy to Vercel
4. ⏳ Configure production database
5. ⏳ Set up monitoring and analytics

**Happy coding! 🚀**
