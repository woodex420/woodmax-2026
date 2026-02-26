#!/bin/bash

# Quick Reference Card - Woodex Platform
# Display in terminal for easy reference

cat << 'EOF'

╔══════════════════════════════════════════════════════════════════════════════╗
║                    🏪 WOODEX E-COMMERCE PLATFORM 🏪                         ║
║                   Complete Auth System + Deployment Ready                   ║
╚══════════════════════════════════════════════════════════════════════════════╝

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 🚀 QUICK START (5 MINUTES)                                                 ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

1. Configure Environment:
   $ cp server/.env.example server/.env
   $ cp client/.env.example client/.env
   → Add your Supabase credentials to server/.env

2. Create Test User:
   → Go to Supabase Dashboard
   → Auth → Users → Create new user
   → Email: admin@woodex.com
   → Password: admin123456

3. Start Development:
   $ ./dev.sh
   
   Then open:
   🏪 Store:  http://localhost:5173
   🔐 Admin:  http://localhost:5173/admin
   🔌 API:    http://localhost:4000/api

4. Login:
   Email:    admin@woodex.com
   Password: admin123456

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 📁 PROJECT STRUCTURE                                                       ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

woodmax2026/
├── client/                    # React Frontend (Vite)
│   ├── src/pages/shop/       # 📄 Public store pages
│   ├── src/pages/admin/      # 🔐 Protected admin pages
│   ├── src/contexts/         # 🌐 AuthContext (global auth state)
│   ├── src/services/api.ts   # 🔌 API abstraction layer
│   └── src/App.tsx           # 🚏 Routing setup
│
├── server/                    # Next.js API Backend
│   └── pages/api/
│       ├── auth/             # 🔐 Authentication endpoints
│       ├── products.ts       # 📦 Products API
│       ├── orders.ts         # 📋 Orders API
│       └── knowledge.ts      # 📚 Knowledge Base API
│
├── docs/                      # 📖 Documentation
│   ├── MASTER_PLAN.md
│   └── DEPLOYMENT_GUIDE.md
│
├── LOCAL_SETUP.md            # 📘 Local dev guide
├── VERCEL_DEPLOYMENT.md      # 🚀 Cloud deployment
├── IMPLEMENTATION_SUMMARY.md # ✅ What was built
├── dev.sh                    # 🎯 Start both servers
├── github-setup.sh           # 🐙 GitHub push helper
└── README.md                 # 📚 Main documentation

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 🔐 AUTHENTICATION SYSTEM                                                   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

✅ Features:
   • Email/password login & signup
   • JWT token management
   • Session persistence (localStorage)
   • Protected admin routes
   • Auto-logout on invalid token
   • User greeting with display name

📡 API Endpoints:
   POST   /api/auth/login       → Login, returns token
   POST   /api/auth/signup      → Create new account
   POST   /api/auth/logout      → Logout
   GET    /api/auth/session     → Verify token

🔗 Frontend:
   • AuthContext - Global state
   • useAuth() hook - Access auth in any component
   • ProtectedRoute - Route guard for admin
   • LoginPage - Beautiful login/signup form

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 📱 PAGES & ROUTES                                                          ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

PUBLIC (No login required):
   /                        → Homepage
   /shop                    → Product listing
   /product/:id             → Product details
   /login                   → Login/signup form
   /about, /contact, etc.   → Info pages

PROTECTED (Login required):
   /admin                   → Dashboard
   /admin/products          → Product management
   /admin/knowledge         → Knowledge base editor
   
   🔒 Unauthenticated users automatically redirected to /login

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 🛠️ DEVELOPMENT COMMANDS                                                   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

$ ./dev.sh                    ✅ Start both servers (recommended)

Manual start (separate terminals):
$ cd client && pnpm dev       → Frontend on :5173
$ cd server && pnpm dev       → API on :4000

Build for production:
$ cd client && pnpm build     → Generate dist/
$ cd server && pnpm build     → Generate .next/

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 💾 ENVIRONMENT VARIABLES                                                   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

client/.env:
   VITE_API_URL=http://localhost:4000/api

server/.env:
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your_anon_key_here
   SUPABASE_KEY=your_service_key_here
   JWT_SECRET=your_secret_key_here
   NODE_ENV=development

📝 Get from: https://supabase.com/dashboard/project/_/settings/api

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 🌐 DEPLOYMENT (NEXT STEP)                                                  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

Step 1: Push to GitHub
   $ ./github-setup.sh
   Follow prompts to create repo and push

Step 2: Deploy to Vercel
   See: VERCEL_DEPLOYMENT.md
   
   • Deploy Client (root: client/)
   • Deploy Server (root: server/)
   • Add environment variables
   • Done! ✨

📊 Result:
   🏪 Store:  https://your-project.vercel.app
   🔌 API:    https://your-server.vercel.app/api

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 📚 DOCUMENTATION                                                           ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

README.md                 → Project overview & features
LOCAL_SETUP.md            → Detailed local development guide
VERCEL_DEPLOYMENT.md      → Step-by-step cloud deployment
IMPLEMENTATION_SUMMARY.md → What was built & how
MASTER_PLAN.md           → Architecture & roadmap
DEPLOYMENT_GUIDE.md      → Advanced deployment options

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 🐛 TROUBLESHOOTING                                                        ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

❌ "Invalid Supabase credentials"
   ✓ Check server/.env has correct SUPABASE_URL & SUPABASE_KEY
   ✓ Verify project is active in Supabase dashboard

❌ "Login fails with 401"
   ✓ Verify user exists in Supabase
   ✓ Check password is correct (admin123456)
   ✓ Review server logs in terminal

❌ "Admin page shows Loading..."
   ✓ Check browser console (F12) for errors
   ✓ Verify token in localStorage: localStorage.getItem('auth_token')
   ✓ Check Network tab for failed API calls

❌ "Cannot GET /api/..."
   ✓ Make sure server is running: ./dev.sh
   ✓ Check API URL in client/.env
   ✓ Verify both ports (5173, 4000) are available

More help: See LOCAL_SETUP.md → Troubleshooting section

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ✅ CHECKLIST                                                              ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

Before Deploying:
   ☐ Local setup works (./dev.sh)
   ☐ Can login with admin@woodex.com
   ☐ Admin dashboard accessible
   ☐ All API endpoints return data
   ☐ No errors in DevTools console
   ☐ .env files created (server/ and client/)

For GitHub:
   ☐ Run ./github-setup.sh
   ☐ Add remote and push to GitHub
   ☐ Verify code on GitHub

For Vercel Deployment:
   ☐ Read VERCEL_DEPLOYMENT.md
   ☐ Deploy client project
   ☐ Deploy server project
   ☐ Add environment variables
   ☐ Test production URLs
   ☐ Update client API URL after server deployment

╔══════════════════════════════════════════════════════════════════════════════╗
║              Ready to go live! Follow the deployment guide. 🚀              ║
║                      Questions? Check the docs! 📚                          ║
╚══════════════════════════════════════════════════════════════════════════════╝

EOF
