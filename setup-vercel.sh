#!/bin/bash

# InformData API Docs - Vercel Setup Script
# This script helps you set up and deploy the documentation to Vercel

echo "================================================"
echo "🚀 InformData API Documentation - Vercel Setup"
echo "================================================"
echo ""

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check for Node.js
if ! command_exists node; then
    echo "❌ Node.js is not installed."
    echo "Please install Node.js from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js $(node --version) detected"

# Check for npm
if ! command_exists npm; then
    echo "❌ npm is not installed."
    exit 1
fi

echo "✅ npm $(npm --version) detected"

# Install Vercel CLI if not present
if ! command_exists vercel; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
    
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install Vercel CLI"
        echo "Try running: sudo npm install -g vercel"
        exit 1
    fi
else
    echo "✅ Vercel CLI detected"
fi

# Create necessary files if they don't exist
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Please run this script from the project root."
    exit 1
fi

echo ""
echo "📋 Project Setup Complete!"
echo ""
echo "================================================"
echo "🎯 Next Steps:"
echo "================================================"
echo ""
echo "1. Deploy to Vercel:"
echo "   Run: vercel"
echo ""
echo "2. Follow the prompts to:"
echo "   - Login/Signup to Vercel"
echo "   - Link to existing project or create new"
echo "   - Configure project settings"
echo ""
echo "3. For production deployment:"
echo "   Run: vercel --prod"
echo ""
echo "================================================"
echo "📌 Quick Commands:"
echo "================================================"
echo ""
echo "Local development:  npm run dev"
echo "Preview deploy:     vercel"
echo "Production deploy:  vercel --prod"
echo "View deployments:   vercel list"
echo ""
echo "================================================"
echo ""

# Ask if user wants to deploy now
read -p "Would you like to deploy to Vercel now? (y/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "🚀 Starting Vercel deployment..."
    echo ""
    vercel
else
    echo ""
    echo "👍 You can deploy later by running: vercel"
fi

echo ""
echo "✨ Setup complete! Happy deploying!"