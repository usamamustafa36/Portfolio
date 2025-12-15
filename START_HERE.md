# 🚀 START HERE - Simple Guide

## ⚡ Quick Start (3 Steps)

### Step 1: Open Terminal
Open your terminal/command prompt.

### Step 2: Go to Project Folder
```bash
cd /home/ubuntu/personel-work/company_website
```

### Step 3: Run This Command
```bash
npm run start-easy
```

**That's it!** The website will open automatically at http://localhost:3000

---

## 📋 What Each Command Does

| Command | What It Does |
|---------|-------------|
| `npm run start-easy` | **EASIEST** - Installs dependencies, checks everything, and starts server |
| `npm run dev` | Starts the development server |
| `npm run stop` | Stops the server |
| `npm run restart` | Restarts the server |
| `npm run check` | Checks if everything is set up correctly |

---

## 🆘 If Something Goes Wrong

### Problem: "command not found: npm"
**Solution:** Install Node.js first
```bash
# Check if Node.js is installed
node --version

# If not installed, install it:
# Ubuntu/Debian:
sudo apt update && sudo apt install nodejs npm

# Or download from: https://nodejs.org/
```

### Problem: "Port 3000 is already in use"
**Solution:** Run this command:
```bash
npm run stop
npm run dev
```

### Problem: "Cannot find module"
**Solution:** Install dependencies:
```bash
npm install
```

### Problem: "Permission denied"
**Solution:** Fix permissions:
```bash
sudo chown -R $USER:$USER /home/ubuntu/personel-work/company_website
```

---

## ✅ Success Checklist

When the server starts, you should see:
```
✓ Ready in X seconds
○ Local:        http://localhost:3000
```

Then open your browser and go to: **http://localhost:3000**

---

## 🎯 That's All You Need!

Just remember: **`npm run start-easy`** and you're done! 🎉

