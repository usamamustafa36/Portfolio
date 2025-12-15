#!/bin/bash

echo "🚀 Deploying to Vercel..."
echo ""
echo "This will:"
echo "1. Check if you're logged in to Vercel"
echo "2. Deploy your site"
echo "3. Give you a live URL"
echo ""

# Check if logged in
if ! npx vercel whoami &>/dev/null; then
    echo "❌ Not logged in to Vercel"
    echo "📝 Please run: npx vercel login"
    echo "   This will open a browser for you to authenticate"
    exit 1
fi

echo "✅ Logged in to Vercel"
echo "📦 Deploying..."
echo ""

# Deploy
npx vercel --yes

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your site is now live!"


