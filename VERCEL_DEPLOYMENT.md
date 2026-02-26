# 🚀 Vercel Deployment Guide

Deploy your Woodex platform to Vercel for free with automatic CI/CD and global edge network.

## Prerequisites

- GitHub account with your code repository
- Supabase account with production credentials
- Vercel account (free) at https://vercel.com

## Part 1: Deploy Client (React Frontend)

### 1. Connect Repository to Vercel

1. Go to https://vercel.com
2. Click **"New Project"**
3. Click **"Import Git Repository"**
4. Search for your repository name
5. Click **"Import"**

### 2. Configure Client Deployment

On the "Configure Project" screen:

**Framework Preset**: Select **"Vite"** (or leave as None if not detected)

**Root Directory**: Change to **`client`**

**Build Command**: 
```
pnpm install && pnpm run build
```

**Output Directory**: 
```
dist
```

**Install Command**:
```
pnpm install
```

**Environment Variables**:

| Key | Value |
|-----|-------|
| `VITE_API_URL` | `https://your-server.vercel.app/api` |

> ⚠️ Replace `your-server.vercel.app` with your actual server domain (deployed in Part 2)

### 3. Deploy

Click **"Deploy"** and wait for completion (usually 1-2 minutes).

Your store is now live at: **`https://your-project-name.vercel.app`**

## Part 2: Deploy Server (Next.js API)

### 1. Create New Project on Vercel

1. Go to https://vercel.com
2. Click **"New Project"** again
3. Click **"Import Git Repository"**
4. Search for the **same** repository
5. Click **"Import"**

### 2. Configure Server Deployment

On the "Configure Project" screen:

**Framework Preset**: Select **"Next.js"** (should auto-detect)

**Root Directory**: Change to **`server`**

**Build Command**: Keep default or use:
```
pnpm install && pnpm run build
```

**Install Command**:
```
pnpm install --shamefully-hoist
```

**Environment Variables**:

Add all from your `server/.env`:

| Key | Value |
|-----|--------|
| `SUPABASE_URL` | Your Supabase project URL |
| `SUPABASE_ANON_KEY` | Your Supabase anon key |
| `SUPABASE_KEY` | Your Supabase service role key |
| `JWT_SECRET` | Generate a random strong secret |

> 📝 **How to get Supabase credentials:**
> 1. Go to https://supabase.com/dashboard
> 2. Select your project
> 3. Go to Settings → API
> 4. Copy the URL and keys

### 3. Deploy

Click **"Deploy"** and wait for completion.

Your API is now live at: **`https://your-server.vercel.app`**

## Part 3: Update Client Configuration

Now that server is deployed, update the client environment:

### 1. Update Vercel Client Project

1. Go back to your **Client project** on Vercel
2. Click **"Settings"** → **"Environment Variables"**
3. Update `VITE_API_URL` to:
   ```
   https://your-server.vercel.app/api
   ```
4. Click **"Save"**

### 2. Redeploy Client

Click **"Redeploy"** to apply the new API URL:

1. Go to **"Deployments"** tab
2. Find the latest deployment
3. Click **"..."** → **"Redeploy"**

## Part 4: Verify Deployment

### Check Both Services Are Running

1. **Client**: Open https://your-project-name.vercel.app
   - Should load the store homepage
   
2. **Server**: Open https://your-server.vercel.app/api/products
   - Should return JSON with product data

3. **Admin**: Go to https://your-project-name.vercel.app/admin
   - Should redirect to login page
   - Login with your credentials

### Test Login

1. Click "Sign in"
2. Use credentials:
   - Email: `admin@woodex.com`
   - Password: `admin123456`
3. Should redirect to admin dashboard

### Check API Calls

Open DevTools (F12) → Network tab:
- Requests should go to `https://your-server.vercel.app/api/*`
- Should all return 200 or 201 status codes

## Part 5: Configure Custom Domain (Optional)

### Add Domain to Client

1. Go to **Client project** → **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `store.woodex.com`)
4. Follow DNS configuration instructions

### Add Subdomain to Server

1. Go to **Server project** → **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter subdomain (e.g., `api.woodex.com`)
4. Follow DNS configuration instructions

## Part 6: Setup CI/CD (Automatic Deployments)

Vercel automatically deploys when you push to main branch:

```bash
# Make a change
echo "# Updated" >> README.md

# Commit and push
git add README.md
git commit -m "Update docs"
git push origin main
```

**Vercel will automatically:**
- Run build
- Run tests (if configured)
- Deploy to production
- Show build logs

## 🔍 Monitoring & Logs

### View Deployment Logs

**Client Project:**
1. Click "Deployments"
2. Click on any deployment
3. View logs in real-time

**Server Project:**
1. Click "Functions" tab
2. View serverless function logs
3. Monitor API performance

### Environment Status

Check your deployments' health:
- Green checkmark = Success
- Yellow = In progress
- Red = Failed

Click deployment to see error details.

## 🔐 Security Checklist

- [ ] Supabase credentials stored in Vercel environment variables (never in code)
- [ ] Custom domain HTTPS enabled (automatic with Vercel)
- [ ] JWT_SECRET changed from default
- [ ] Admin user email configured
- [ ] API rate limiting configured (optional)

## 🆘 Troubleshooting

### Login fails with "Invalid credentials"
- Verify Supabase URL and keys are correct
- Check user exists in Supabase
- Review server logs in Vercel dashboard

### API returns 502 Bad Gateway
- Check server environment variables
- Review Vercel function logs
- Verify Supabase credentials
- Check database connectivity

### CORS errors in browser
- API URL in `VITE_API_URL` must match deployed server URL
- Redeploy client after updating env var
- Clear browser cache (Ctrl+Shift+Delete)

### Pages not loading assets
- Verify both client and server are deployed
- Check browser DevTools Network tab
- Clear cache: Ctrl+Shift+Delete
- Redeploy client project

## 📊 Performance Optimization

### Enable Caching

In your Next.js server (`server/next.config.js`):
```js
module.exports = {
  headers: async () => [
    {
      source: '/api/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=60, s-maxage=120' },
      ],
    },
  ],
};
```

### Database Connection Pooling

Enable PgBouncer in Supabase:
1. Go to Supabase project
2. Settings → Database
3. Enable PgBouncer
4. Use pool connection string

## 📈 Analytics

### Monitor Traffic

Vercel provides free analytics:
1. Go to project → Analytics
2. View requests, bandwidth, build time
3. Monitor error rates

### Supabase Analytics

1. Go to Supabase dashboard
2. Click your project → Analytics
3. View API calls, database usage, auth events

## 🚀 Continuous Improvement

1. **Monitor logs** regularly
2. **Test features** after deployment
3. **Gather user feedback**
4. **Fix bugs** and deploy
5. **Scale resources** if needed

## Next Steps

After deployment:
1. ✅ Verify both client and server are working
2. ✅ Test login and admin features
3. ✅ Configure custom domain
4. ✅ Setup monitoring
5. ✅ Backup Supabase regularly

## Additional Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Deploy**: https://nextjs.org/docs/deployment
- **Supabase Hosting**: https://supabase.com/docs/guides/hosting
- **Performance Guide**: https://web.dev/performance/

---

**Congratulations! Your platform is now live worldwide! 🎉**

For support:
- Check Vercel dashboard logs
- Review Supabase error logs
- Contact Vercel support at support@vercel.com
