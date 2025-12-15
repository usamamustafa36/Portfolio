#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Checking setup...\n');

let allGood = true;

// Check Node.js
try {
  const nodeVersion = execSync('node --version', { encoding: 'utf-8' }).trim();
  console.log(`✅ Node.js: ${nodeVersion}`);
} catch (error) {
  console.log('❌ Node.js: NOT INSTALLED');
  console.log('   Install from: https://nodejs.org/');
  allGood = false;
}

// Check npm
try {
  const npmVersion = execSync('npm --version', { encoding: 'utf-8' }).trim();
  console.log(`✅ npm: ${npmVersion}`);
} catch (error) {
  console.log('❌ npm: NOT INSTALLED');
  allGood = false;
}

// Check node_modules
const nodeModulesPath = path.join(process.cwd(), 'node_modules');
if (fs.existsSync(nodeModulesPath)) {
  console.log('✅ Dependencies: Installed');
} else {
  console.log('❌ Dependencies: NOT INSTALLED');
  console.log('   Run: npm install');
  allGood = false;
}

// Check package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  console.log('✅ package.json: Found');
} else {
  console.log('❌ package.json: NOT FOUND');
  allGood = false;
}

// Check if port 3000 is available
try {
  const portCheck = execSync('lsof -ti:3000 2>/dev/null || true', { encoding: 'utf-8' }).trim();
  if (portCheck) {
    console.log('⚠️  Port 3000: IN USE');
    console.log('   Run: npm run stop');
  } else {
    console.log('✅ Port 3000: Available');
  }
} catch (error) {
  console.log('✅ Port 3000: Available');
}

console.log('\n' + (allGood ? '✅ Everything looks good! Run: npm run dev' : '❌ Please fix the issues above'));

