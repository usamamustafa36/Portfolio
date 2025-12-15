#!/usr/bin/env node

/**
 * Site Verification Script
 * Checks if all critical components and files exist
 */

const fs = require('fs');
const path = require('path');

const criticalFiles = [
  'app/layout.tsx',
  'app/page.tsx',
  'app/globals.css',
  'components/Hero.tsx',
  'components/Navigation.tsx',
  'components/Contact.tsx',
  'components/Services.tsx',
  'components/Stats.tsx',
  'components/ErrorBoundary.tsx',
  'app/api/contact/route.ts',
  'tailwind.config.js',
  'next.config.js',
  'package.json',
];

const criticalComponents = [
  'FloatingShapes',
  'Scene3D',
  'LibraryHub',
  'AnimatedGradient',
  'ParticleBackground',
  'CustomCursor',
  'LoadingScreen',
];

console.log('🔍 Verifying site integrity...\n');

let hasErrors = false;

// Check critical files
console.log('📁 Checking critical files...');
criticalFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    console.log(`  ✅ ${file}`);
  } else {
    console.log(`  ❌ ${file} - MISSING!`);
    hasErrors = true;
  }
});

// Check critical components
console.log('\n🧩 Checking critical components...');
criticalComponents.forEach(component => {
  const filePath = path.join(process.cwd(), 'components', `${component}.tsx`);
  if (fs.existsSync(filePath)) {
    console.log(`  ✅ ${component}.tsx`);
  } else {
    console.log(`  ❌ ${component}.tsx - MISSING!`);
    hasErrors = true;
  }
});

// Check package.json dependencies
console.log('\n📦 Checking dependencies...');
const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'));
const requiredDeps = ['react', 'react-dom', 'next', 'framer-motion', 'tailwindcss'];
requiredDeps.forEach(dep => {
  if (packageJson.dependencies[dep] || packageJson.devDependencies[dep]) {
    console.log(`  ✅ ${dep}`);
  } else {
    console.log(`  ❌ ${dep} - MISSING!`);
    hasErrors = true;
  }
});

if (hasErrors) {
  console.log('\n❌ Site verification FAILED!');
  process.exit(1);
} else {
  console.log('\n✅ Site verification PASSED!');
  console.log('🚀 Ready for production!');
  process.exit(0);
}

