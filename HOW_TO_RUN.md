# 🎯 HOW TO RUN THE WEBSITE - Complete Guide

## ⚡ THE EASIEST WAY (Just Copy & Paste)

```bash
cd /home/ubuntu/personel-work/company_website
npm run start-easy
```

**That's literally it!** The script does everything for you.

---

## 📝 Step-by-Step (If You Want to Understand)

### Step 1: Open Terminal
- **Windows:** Press `Win + R`, type `cmd`, press Enter
- **Mac:** Press `Cmd + Space`, type `Terminal`, press Enter  
- **Linux:** Press `Ctrl + Alt + T`

### Step 2: Navigate to Project
```bash
cd /home/ubuntu/personel-work/company_website
```

### Step 3: Check Everything is Ready
```bash
npm run check
```

This will tell you if anything is missing.

### Step 4: Start the Server
```bash
npm run dev
```

### Step 5: Open Browser
When you see:
```
✓ Ready in X seconds
○ Local:        http://localhost:3000
```

Open your browser and go to: **http://localhost:3000**

---

## 🎮 All Available Commands

| Command | What It Does | When to Use |
|---------|-------------|-------------|
| `npm run start-easy` | **EASIEST** - Does everything automatically | **Use this first!** |
| `npm run dev` | Starts development server | Normal way to start |
| `npm run stop` | Stops the server | When you want to stop |
| `npm run restart` | Restarts the server | If something breaks |
| `npm run check` | Checks your setup | Before starting |
| `npm install` | Installs dependencies | First time only |

---

## 🆘 Troubleshooting

### ❌ "npm: command not found"
**Problem:** Node.js/npm not installed

**Solution:**
```bash
# Check if installed
node --version
npm --version

# If not installed, install Node.js:
# Visit: https://nodejs.org/
# Or on Ubuntu:
sudo apt update
sudo apt install nodejs npm
```

### ❌ "Port 3000 is already in use"
**Problem:** Another server is running

**Solution:**
```bash
npm run stop
npm run dev
```

### ❌ "Cannot find module"
**Problem:** Dependencies not installed

**Solution:**
```bash
npm install
```

### ❌ "Permission denied"
**Problem:** File permissions issue

**Solution:**
```bash
sudo chown -R $USER:$USER /home/ubuntu/personel-work/company_website
```

### ❌ "EADDRINUSE: address already in use"
**Problem:** Port 3000 is busy

**Solution:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

---

## ✅ Success Indicators

You'll know it's working when you see:

1. **In Terminal:**
   ```
   ✓ Ready in 2.5s
   ○ Local:        http://localhost:3000
   ```

2. **In Browser:**
   - Website loads
   - You see the Outlance homepage
   - No error messages

---

## 🛑 How to Stop the Server

**Method 1:** Press `Ctrl + C` in the terminal

**Method 2:** Run this command in another terminal:
```bash
npm run stop
```

---

## 📚 Need More Help?

- Read `START_HERE.md` for the simplest guide
- Read `README.md` for full documentation
- Check `docs/TROUBLESHOOTING.md` for detailed help

---

## 🎉 Quick Reference Card

```
┌─────────────────────────────────────┐
│  TO START:                          │
│  npm run start-easy                 │
│                                     │
│  TO STOP:                           │
│  Press Ctrl+C                       │
│  OR                                 │
│  npm run stop                       │
│                                     │
│  TO CHECK:                          │
│  npm run check                      │
│                                     │
│  WEBSITE URL:                       │
│  http://localhost:3000              │
└─────────────────────────────────────┘
```

---

**Remember:** Just run `npm run start-easy` and you're done! 🚀

