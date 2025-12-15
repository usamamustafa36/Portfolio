#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🛑 Stopping server...\n');

try {
  // Find process on port 3000
  const pid = execSync('lsof -ti:3000 2>/dev/null || true', { encoding: 'utf-8' }).trim();
  
  if (pid) {
    execSync(`kill -9 ${pid} 2>/dev/null || true`);
    console.log('✅ Server stopped successfully!');
  } else {
    console.log('ℹ️  No server running on port 3000');
  }
} catch (error) {
  console.log('ℹ️  No server running on port 3000');
}

