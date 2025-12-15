#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Company Website...\n');

// Colors for output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[1;33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Check if Node.js is installed
try {
  const nodeVersion = execSync('node --version', { encoding: 'utf-8' }).trim();
  log(`✓ Node.js found: ${nodeVersion}`, 'green');
} catch (error) {
  log('❌ Node.js is not installed!', 'red');
  log('   Please install Node.js from https://nodejs.org/', 'yellow');
  process.exit(1);
}

// Check if npm is installed
try {
  const npmVersion = execSync('npm --version', { encoding: 'utf-8' }).trim();
  log(`✓ npm found: ${npmVersion}`, 'green');
} catch (error) {
  log('❌ npm is not installed!', 'red');
  process.exit(1);
}

// Check if node_modules exists
const nodeModulesPath = path.join(process.cwd(), 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
  log('\n📦 Installing dependencies...', 'cyan');
  try {
    execSync('npm install', { stdio: 'inherit' });
    log('✓ Dependencies installed!', 'green');
  } catch (error) {
    log('❌ Failed to install dependencies!', 'red');
    process.exit(1);
  }
} else {
  log('✓ Dependencies already installed', 'green');
}

// Check if .next exists (build cache)
const nextPath = path.join(process.cwd(), '.next');
if (fs.existsSync(nextPath)) {
  log('✓ Build cache found', 'green');
}

// Kill any existing server on port 3000
log('\n🔍 Checking for existing server...', 'cyan');
try {
  const portCheck = execSync('lsof -ti:3000 2>/dev/null || true', { encoding: 'utf-8' }).trim();
  if (portCheck) {
    log('⚠️  Port 3000 is in use. Stopping existing server...', 'yellow');
    execSync(`kill -9 ${portCheck} 2>/dev/null || true`);
    log('✓ Old server stopped', 'green');
  }
} catch (error) {
  // Ignore errors
}

// Start the server
log('\n🌟 Starting development server...', 'cyan');
log('   This may take a few seconds...\n', 'yellow');

const server = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true,
});

// Handle server output
server.on('error', (error) => {
  log(`\n❌ Error starting server: ${error.message}`, 'red');
  process.exit(1);
});

// Wait a bit then check if server started
setTimeout(() => {
  try {
    execSync('curl -s http://localhost:3000 > /dev/null 2>&1', { encoding: 'utf-8' });
    log('\n✅ SUCCESS! Server is running!', 'green');
    log('\n📱 Open your browser and go to:', 'cyan');
    log('   👉 http://localhost:3000', 'blue');
    log('\n💡 Press Ctrl+C to stop the server\n', 'yellow');
  } catch (error) {
    // Server might still be starting
    log('\n⏳ Server is starting...', 'yellow');
    log('   Open http://localhost:3000 in your browser in a few seconds\n', 'cyan');
  }
}, 5000);

// Handle Ctrl+C
process.on('SIGINT', () => {
  log('\n\n🛑 Stopping server...', 'yellow');
  server.kill();
  process.exit(0);
});

process.on('SIGTERM', () => {
  server.kill();
  process.exit(0);
});

