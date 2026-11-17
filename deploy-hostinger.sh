#!/bin/bash
# Dyams Quick Deploy Script for Hostinger

echo "=== Setting up Dyams Login App on Hostinger ==="

# 1. Install Node.js dependencies
echo "Installing npm dependencies..."
npm install --omit=dev

# 2. Check for .env file
if [ ! -f .env ]; then
  echo "Creating .env from .env.example..."
  cp .env.example .env
  echo "Please remember to set your MONGO_URI in .env"
fi

# 3. Start or restart with PM2 (if available) or Node
if command -v pm2 &> /dev/null; then
  echo "Starting with PM2..."
  pm2 restart dyams-login || pm2 start server.js --name dyams-login
  pm2 save
else
  echo "Starting with node server.js..."
  node server.js
fi
