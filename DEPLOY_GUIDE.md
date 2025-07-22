# 🚀 Vercel Deployment Guide

Deploy the InformData API Documentation to Vercel in minutes!

## Prerequisites

- Node.js 14+ installed
- A Vercel account (free at [vercel.com](https://vercel.com))

## Quick Deploy Methods

### Method 1: One-Click Deploy (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/informdata-api-docs)

### Method 2: Command Line Deploy

```bash
# 1. Install Vercel CLI (if not already installed)
npm install -g vercel

# 2. Navigate to project directory
cd /Users/jamesbrady/informdata-api-docs

# 3. Run the deployment script
./deploy.sh

# Or deploy directly:
vercel --prod
```

### Method 3: Manual Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import from Git or drag & drop the `informdata-api-docs` folder
4. Click "Deploy"

## Deployment Configuration

The project includes:

### `vercel.json`
- Static file handling optimized for documentation
- Security headers configured
- Caching settings for performance
- Routes configured for SPA behavior

### `package.json`
- Scripts for local development and deployment
- No build step required (static site)

## Post-Deployment

After deployment, you'll get:

1. **Production URL**: `https://your-project.vercel.app`
2. **Preview URLs**: For each deployment
3. **Custom Domain**: Can be configured in Vercel dashboard

### Custom Domain Setup

1. In Vercel dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain (e.g., `docs.informdata.com`)
4. Follow DNS configuration instructions

## Environment Variables (Optional)

If you need to add API keys or configuration:

```bash
# Add via CLI
vercel env add API_BASE_URL production

# Or add in Vercel dashboard:
# Settings → Environment Variables
```

## Local Development

```bash
# Install dependencies
npm install

# Run local server
npm run dev
# Visit http://localhost:3000
```

## Updating the Documentation

1. Make changes to the HTML/CSS/JS files
2. Commit changes (if using Git)
3. Deploy updates:
   ```bash
   vercel --prod
   ```

## Features Enabled on Vercel

- ✅ Automatic HTTPS
- ✅ Global CDN distribution
- ✅ Automatic compression
- ✅ Preview deployments for each change
- ✅ Performance analytics
- ✅ Custom domains
- ✅ Zero configuration needed

## Troubleshooting

### Build Errors
This is a static site, so build errors are rare. Check:
- All HTML files are valid
- No missing closing tags
- File paths are correct

### 404 Errors
- Ensure `vercel.json` routes are configured
- Check file names match exactly (case-sensitive)

### Slow Loading
- Images should be optimized
- Consider enabling Vercel Analytics to identify issues

## Project Structure for Vercel

```
informdata-api-docs/
├── index.html              # Entry point
├── endpoints-detail.html   # Additional pages
├── product-catalog.html    
├── error-reference.html    
├── styles.css             # Styles (cached)
├── script.js              # Scripts (cached)
├── vercel.json            # Vercel config
├── package.json           # Project metadata
└── README.md              # Documentation
```

## Quick Commands

```bash
# Deploy to production
vercel --prod

# Create preview deployment
vercel

# List all deployments
vercel list

# View deployment logs
vercel logs [deployment-url]

# Remove deployment
vercel remove [deployment-url]
```

## Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)

---

Ready to deploy? Run `./deploy.sh` or `vercel --prod` to get started! 🎉