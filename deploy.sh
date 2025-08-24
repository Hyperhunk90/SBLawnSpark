#!/bin/bash

# Southern Buck Lawn Care - Deployment Script
echo "🌱 Southern Buck Lawn Care - Deployment Starting..."

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Cloudflare Pages
    echo "🚀 Deploying to Cloudflare Pages..."
    npx wrangler pages deploy dist --project-name=southern-buck-lawn-care
    
    if [ $? -eq 0 ]; then
        echo "✅ Deployment successful!"
        echo "🌐 Your website is now live!"
    else
        echo "❌ Deployment failed. Please check your Cloudflare authentication."
        echo "💡 Run 'npx wrangler login' first if not authenticated."
    fi
else
    echo "❌ Build failed. Please check for errors above."
fi