# 🛠️ Setup Instructions

Complete guide to set up and run the portfolio locally.

## Prerequisites

- **Node.js**: v16 or higher ([Download](https://nodejs.org))
- **npm**: v7 or higher (comes with Node.js)
- **Git**: ([Download](https://git-scm.com))

## Option 1: Quick Setup (Windows)

1. **Navigate to portfolio directory**:
   ```bash
   cd d:\portfolio
   ```

2. **Run setup script**:
   ```bash
   setup-portfolio.bat
   ```

3. **Install dependencies**:
   ```bash
   cd abhi-portfolio
   npm install
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**: http://localhost:3000

## Option 2: Manual Setup

### Windows

```bash
# Clone repository
cd d:\portfolio
git clone https://github.com/Abhishek-Kumar001/abhi-portfolio.git
cd abhi-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

### macOS/Linux

```bash
# Clone repository
cd ~/portfolio
git clone https://github.com/Abhishek-Kumar001/abhi-portfolio.git
cd abhi-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

## Development Commands

### Start Development Server
```bash
npm run dev
```
- Opens http://localhost:3000
- Hot module replacement enabled
- Auto-reload on file changes

### Build for Production
```bash
npm run build
```
- Minified output in `dist/` folder
- Ready for deployment
- ~45KB gzipped

### Preview Production Build
```bash
npm run preview
```
- Test production build locally
- Simulates deployment environment

## Project Structure

```
abhi-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.tsx         # Navigation bar
│   │   ├── Hero.tsx           # Welcome section
│   │   ├── About.tsx          # About me
│   │   ├── Skills.tsx         # Skills showcase
│   │   ├── Experience.tsx     # Work experience
│   │   ├── Projects.tsx       # Featured projects
│   │   ├── Education.tsx      # Education info
│   │   ├── Contact.tsx        # Contact form
│   │   └── Footer.tsx         # Footer
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── vite.config.ts             # Vite config
├── tailwind.config.js         # Tailwind CSS config
└── vercel.json                # Vercel deployment config
```

## Customization Guide

### Update Your Info

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update name, title, bio
   - Change social links
   - Modify CTA buttons

2. **Skills** (`src/components/Skills.tsx`):
   - Add/remove skill categories
   - Update skill list

3. **Experience** (`src/components/Experience.tsx`):
   - Add new jobs
   - Update dates and achievements

4. **Projects** (`src/components/Projects.tsx`):
   - Add new projects
   - Update project links
   - Change tech stack

5. **Contact** (`src/components/Contact.tsx`):
   - Update email address
   - Change phone number
   - Modify form behavior

### Change Styling

1. **Colors** (`tailwind.config.js`):
   ```js
   theme: {
     colors: {
       // Update color palette
     }
   }
   ```

2. **Animations** (`src/index.css`):
   - Modify @keyframes
   - Adjust animation timing
   - Change animation effects

3. **Typography**:
   - Update font sizes
   - Change font families
   - Adjust line heights

## Debugging

### Check TypeScript Errors
```bash
npx tsc --noEmit
```

### Build in Debug Mode
```bash
npm run build -- --sourcemap
```

### Clear Cache
```bash
rm -rf node_modules package-lock.json
npm install
```

## Browser Support

- Chrome/Edge: ✅ Latest 2 versions
- Firefox: ✅ Latest 2 versions
- Safari: ✅ Latest 2 versions
- Mobile Browsers: ✅ All modern versions

## Performance Tips

1. **Image Optimization**: Use next-gen formats (WebP)
2. **Code Splitting**: Vite handles it automatically
3. **Lazy Loading**: Use React.lazy() for heavy components
4. **CSS Optimization**: Tailwind purges unused styles

## Common Issues

### Issue: Port 3000 already in use
**Solution**:
```bash
npm run dev -- --port 3001
```

### Issue: Module not found
**Solution**:
```bash
rm -rf node_modules
npm install
```

### Issue: Build size too large
**Solution**:
```bash
npm run build -- --analyze
```

### Issue: Styles not loading
**Solution**:
1. Check if Tailwind CSS is imported in `src/index.css`
2. Verify `tailwind.config.js` content paths
3. Rebuild: `npm run build`

## Next Steps

1. ✅ Clone repository
2. ✅ Install dependencies
3. ✅ Run development server
4. ✅ Customize content
5. ✅ Test on different devices
6. ✅ Deploy to Vercel/Netlify

See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment instructions.

---

**Questions?** Check [GitHub Discussions](https://github.com/Abhishek-Kumar001/abhi-portfolio/discussions) or open an issue!
