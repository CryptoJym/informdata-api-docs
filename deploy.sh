#!/bin/bash

# InformData API Docs - Vercel Deployment Script

echo "🚀 Deploying InformData API Documentation to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if this is the first deployment
if [ ! -d ".vercel" ]; then
    echo "📋 First time deployment detected. Running Vercel setup..."
    vercel
else
    echo "♻️  Existing Vercel project detected."
    
    # Ask for deployment type
    echo "Select deployment type:"
    echo "1) Preview deployment"
    echo "2) Production deployment"
    read -p "Enter choice (1 or 2): " choice

    case $choice in
        1)
            echo "🔍 Creating preview deployment..."
            vercel
            ;;
        2)
            echo "🚀 Creating production deployment..."
            vercel --prod
            ;;
        *)
            echo "❌ Invalid choice. Exiting."
            exit 1
            ;;
    esac
fi

echo "✅ Deployment complete!"