#!/bin/bash

# Connect GitHub repo to Vercel

echo "🔗 Connecting GitHub repository to Vercel..."
echo ""
echo "GitHub Repository: https://github.com/CryptoJym/informdata-api-docs"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

echo "================================================"
echo "📋 Next Steps to Connect to Vercel:"
echo "================================================"
echo ""
echo "Option 1: Automatic Import (Recommended)"
echo "1. Visit: https://vercel.com/new"
echo "2. Click 'Import Git Repository'"
echo "3. Select: CryptoJym/informdata-api-docs"
echo "4. Click 'Deploy'"
echo ""
echo "Option 2: Direct Link"
echo "Click here: https://vercel.com/import/git?s=https://github.com/CryptoJym/informdata-api-docs"
echo ""
echo "Option 3: CLI Import"
echo "Run: vercel --confirm"
echo ""
echo "================================================"
echo "🎯 After Deployment:"
echo "================================================"
echo "1. Your site will be live at: https://[project-name].vercel.app"
echo "2. Configure custom domain in Vercel dashboard"
echo "3. GitHub integration will auto-deploy on push"
echo ""

# Open browser to Vercel import page
read -p "Would you like to open Vercel import page in browser? (y/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Opening Vercel import page..."
    open "https://vercel.com/import/git?s=https://github.com/CryptoJym/informdata-api-docs"
fi

echo ""
echo "✨ Repository ready for Vercel deployment!"