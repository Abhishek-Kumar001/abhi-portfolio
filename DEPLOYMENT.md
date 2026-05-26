# 🚀 Deployment Guide

This portfolio is designed to be deployed with zero configuration on Vercel or any static hosting service.

## Quick Deploy on Vercel

### Option 1: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import the `abhi-portfolio` repository
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

✅ Your portfolio will be live in seconds!

### Option 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel

# For production deployment
vercel --prod
```

## Deploy on Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and select `abhi-portfolio`
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click "Deploy site"

## Deploy on GitHub Pages

1. Update `vite.config.ts` to add base:
```typescript
export default defineConfig({
  base: '/abhi-portfolio/', // if repo name is different
  // ... rest of config
})
```

2. Add deploy script to `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. Run:
```bash
npm install --save-dev gh-pages
npm run deploy
```

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Setup

### Windows
```bash
# Using setup script
cd d:\portfolio
setup-portfolio.bat

# Or manually
cd d:\portfolio\abhi-portfolio
npm install
npm run dev
```

### macOS/Linux
```bash
cd ~/portfolio
git clone https://github.com/Abhishek-Kumar001/abhi-portfolio.git
cd abhi-portfolio
npm install
npm run dev
```

## Custom Domain

### Vercel
1. Go to Project Settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as shown

### Netlify
1. Go to Domain Settings
2. Click "Add custom domain"
3. Point your DNS to Netlify nameservers

## Continuous Deployment

Both Vercel and Netlify auto-deploy on push to main branch!

```bash
# Just push to GitHub
git add .
git commit -m "Update portfolio"
git push origin main
# Site auto-deploys in 1-2 minutes!
```

## SSL/TLS

✅ Automatically provided by all platforms above
- Vercel: ✅ Free SSL
- Netlify: ✅ Free SSL
- GitHub Pages: ✅ Free SSL

## Performance

- **Bundle Size**: ~45KB (gzipped)
- **First Contentful Paint**: < 1s
- **Lighthouse Score**: 95+

## Troubleshooting

### Port already in use
```bash
# Change port in vite.config.ts or use:
npm run dev -- --port 3001
```

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Components not rendering
```bash
# Check if all component files are created
ls src/components/

# Should show: About.tsx, Contact.tsx, Education.tsx, etc.
```

---

**Need help?** Check [Vite Docs](https://vitejs.dev) or [React Docs](https://react.dev)
