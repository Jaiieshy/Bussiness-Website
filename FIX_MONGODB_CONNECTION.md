# 🔧 Fix MongoDB Connection Error

## ❌ Error You're Seeing

```
❌ MongoDB connection error: MongooseServerSelectionError: connect ECONNREFUSED
```

This means MongoDB is not running or not accessible.

---

## ✅ Solution: Choose One Option

### Option 1: Use MongoDB Atlas (Cloud) ⭐ **EASIEST & RECOMMENDED**

**No installation needed!**

1. **Sign up for free MongoDB Atlas:**
   - Visit: https://www.mongodb.com/cloud/atlas
   - Click "Try Free" and create account

2. **Create a cluster** (takes 3-5 minutes)
   - Choose "Free" tier
   - Select region closest to you
   - Click "Create"

3. **Create database user:**
   - Go to "Database Access" → "Add New Database User"
   - Choose username and password (save these!)
   - Set privileges to "Atlas Admin"
   - Click "Add User"

4. **Allow network access:**
   - Go to "Network Access" → "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"

5. **Get connection string:**
   - Go to "Database" → Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Add database name: `newdeepakmarble` before the `?`

6. **Create `.env` file in `Server` folder:**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/newdeepakmarble?retryWrites=true&w=majority
   PORT=4000
   ```

7. **Restart server:**
   ```bash
   # Stop current server (Ctrl+C)
   npm run dev
   ```

---

### Option 2: Install Local MongoDB

**For Windows:**

1. **Download MongoDB:**
   - Visit: https://www.mongodb.com/try/download/community
   - Select: Windows, MSI package
   - Download and install

2. **During installation:**
   - Choose "Complete" installation
   - Check "Install MongoDB as a Service"
   - Keep default settings

3. **Verify MongoDB is running:**
   - Open "Services" app (Windows key + R, type `services.msc`)
   - Find "MongoDB" service
   - Make sure it's "Running"
   - If not, right-click → "Start"

4. **Restart your server:**
   ```bash
   # Stop current server (Ctrl+C)
   npm run dev
   ```

**For macOS:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**For Linux:**
```bash
sudo systemctl start mongod
sudo systemctl enable mongod
```

---

## 🎯 What Changed

The server now:
- ✅ **Won't crash** if MongoDB isn't connected
- ✅ **Shows helpful error messages** with fix instructions
- ✅ **Allows server to start** even without MongoDB
- ✅ **Returns proper error codes** (503) when database is unavailable
- ✅ **Will automatically connect** when MongoDB becomes available

---

## ✅ After Fixing

When you restart the server, you should see:

```
✅ MongoDB connected successfully
📦 Database: newdeepakmarble
✅ Mongoose connected to MongoDB
🚀 API server running on http://localhost:4000
```

Instead of the error message!

---

## 🧪 Test It

1. Start server: `npm run dev`
2. Check for success message
3. Submit contact form on your website
4. Should work without errors!

---

## 📚 Need More Help?

- See `MONGODB_SETUP.md` for detailed setup instructions
- See `QUICK_START_MONGODB.md` for quick reference

