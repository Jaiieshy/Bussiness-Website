# ⚡ Quick Start - MongoDB Setup

## 🎯 Choose Your Setup

### Option 1: MongoDB Atlas (Cloud - Easiest) ⭐ Recommended

1. **Sign up** at https://www.mongodb.com/cloud/atlas
2. **Create a free cluster** (takes 3-5 minutes)
3. **Create database user** (Database Access → Add User)
4. **Allow network access** (Network Access → Allow from anywhere)
5. **Get connection string** (Connect → Connect your application)
6. **Copy connection string** and update credentials

### Option 2: Local MongoDB

1. **Install MongoDB:**
   - Windows: Download from https://www.mongodb.com/try/download/community
   - macOS: `brew install mongodb-community`
   - Linux: Follow installation guide for your distro

2. **Start MongoDB service**
3. **Use connection string:** `mongodb://localhost:27017/newdeepakmarble`

---

## ⚙️ Configure Project

### Step 1: Install Dependencies
```bash
cd Server
npm install
```

### Step 2: Create `.env` File

Create `Server/.env` file:

**For Atlas (Cloud):**
```env
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/newdeepakmarble?retryWrites=true&w=majority
PORT=4000
```

**For Local:**
```env
MONGODB_URI=mongodb://localhost:27017/newdeepakmarble
PORT=4000
```

**Important:** Replace `username`, `password`, and cluster URL with your actual values!

### Step 3: Start Server
```bash
cd Server
npm run dev
```

You should see:
```
✅ MongoDB connected successfully
📦 Database: newdeepakmarble
🚀 API server running on http://localhost:4000
```

---

## ✅ Test It

1. Start frontend: `npm run dev` (from project root)
2. Go to About page
3. Submit contact form
4. Check server logs - should see contact saved!

---

## 📚 Full Documentation

See `MONGODB_SETUP.md` for complete guide with troubleshooting!

