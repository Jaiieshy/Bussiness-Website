# MongoDB Database Setup Guide

Complete guide to set up MongoDB database for the New Deepak Marble project.

## 📋 Table of Contents

1. [MongoDB Options](#mongodb-options)
2. [Local MongoDB Setup](#local-mongodb-setup)
3. [MongoDB Atlas Setup (Cloud)](#mongodb-atlas-setup-cloud)
4. [Project Configuration](#project-configuration)
5. [Testing](#testing)
6. [Troubleshooting](#troubleshooting)

---

## 🎯 MongoDB Options

You have two options for MongoDB:

1. **Local MongoDB** - Install MongoDB on your computer (free, for development)
2. **MongoDB Atlas** - Cloud database (free tier available, easier setup)

---

## 💻 Local MongoDB Setup

### Step 1: Install MongoDB

#### Windows:

1. Download MongoDB Community Server:
   - Visit: https://www.mongodb.com/try/download/community
   - Select: Windows, MSI package
   - Download and run the installer

2. During installation:
   - Choose "Complete" installation
   - Check "Install MongoDB as a Service"
   - Keep default settings

3. Verify installation:
   ```bash
   mongod --version
   ```

#### macOS:

Using Homebrew:
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

#### Linux (Ubuntu/Debian):

```bash
# Import MongoDB public GPG key
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -

# Add MongoDB repository
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Install MongoDB
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod
```

### Step 2: Verify MongoDB is Running

```bash
# Check if MongoDB service is running
# Windows: Check Services app
# macOS/Linux:
sudo systemctl status mongod
```

### Step 3: Test MongoDB Connection

Open MongoDB shell:
```bash
mongosh
```

You should see:
```
Current Mongosh Log ID: ...
Connecting to: mongodb://127.0.0.1:27017
Using MongoDB: ...
```

Type `exit` to leave the shell.

---

## ☁️ MongoDB Atlas Setup (Cloud)

### Step 1: Create MongoDB Atlas Account

1. Visit: https://www.mongodb.com/cloud/atlas
2. Click **"Try Free"** or **"Sign Up"**
3. Create a free account

### Step 2: Create a Cluster

1. After signing up, click **"Build a Database"**
2. Choose **"Free"** tier (M0)
3. Select a cloud provider and region (choose closest to you)
4. Click **"Create"**

Wait 3-5 minutes for cluster creation.

### Step 3: Create Database User

1. Go to **Database Access** (left sidebar)
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Enter username and password (save these!)
5. Under **"Database User Privileges"**, select **"Atlas Admin"**
6. Click **"Add User"**

### Step 4: Configure Network Access

1. Go to **Network Access** (left sidebar)
2. Click **"Add IP Address"**
3. For development, click **"Allow Access from Anywhere"** (0.0.0.0/0)
   - **Note:** For production, use specific IPs only
4. Click **"Confirm"**

### Step 5: Get Connection String

1. Go to **Database** (left sidebar)
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Select **"Node.js"** and version **"5.5 or later"**
5. Copy the connection string:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. Replace `<username>` and `<password>` with your database user credentials
7. Add database name at the end:
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/newdeepakmarble?retryWrites=true&w=majority
   ```

---

## ⚙️ Project Configuration

### Step 1: Install Dependencies

In the `Server` folder:
```bash
cd Server
npm install
```

This installs:
- `mongoose` - MongoDB object modeling
- `dotenv` - Environment variable management

### Step 2: Create Environment File

1. In the `Server` folder, create a `.env` file:

**For Local MongoDB:**
```env
MONGODB_URI=mongodb://localhost:27017/newdeepakmarble
PORT=4000
```

**For MongoDB Atlas:**
```env
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/newdeepakmarble?retryWrites=true&w=majority
PORT=4000
```

**Important:** 
- Replace `username`, `password`, and `cluster0.xxxxx` with your actual Atlas credentials
- Never commit `.env` file to git (already in `.gitignore`)

### Step 3: Start the Server

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

## ✅ Testing

### Test 1: Check Database Connection

When you start the server, you should see:
```
✅ MongoDB connected successfully
📦 Database: newdeepakmarble
```

If you see errors, check the troubleshooting section below.

### Test 2: Submit Contact Form

1. Start the frontend: `npm run dev` (from project root)
2. Go to `http://localhost:3000`
3. Navigate to **About** page
4. Fill out and submit the contact form
5. Check server terminal - you should see:
   ```
   ✅ Contact saved to MongoDB: 507f1f77bcf86cd799439011
   ```

### Test 3: View Saved Contacts

**Option A: Via API**
```bash
# Get all contacts
curl http://localhost:4000/api/contacts
```

**Option B: Using MongoDB Shell**

For Local MongoDB:
```bash
mongosh
use newdeepakmarble
db.contacts.find().pretty()
```

For MongoDB Atlas:
1. Go to Atlas dashboard
2. Click **"Browse Collections"**
3. Select your database (`newdeepakmarble`)
4. View the `contacts` collection

### Test 4: Get Contact by ID

```bash
# Replace CONTACT_ID with actual ID from previous test
curl http://localhost:4000/api/contacts/CONTACT_ID
```

---

## 🔧 Project Structure

```
Server/
├── config/
│   └── database.ts          # MongoDB connection
├── models/
│   └── Contact.ts           # Contact schema/model
├── index.ts                 # Server with MongoDB routes
├── .env                     # Environment variables (create this)
├── package.json             # Dependencies
└── tsconfig.json            # TypeScript config
```

---

## 📊 Database Schema

The Contact model has the following fields:

```typescript
{
  name: String (required, max 100 chars)
  email: String (required, validated, indexed)
  phone: String (required)
  message: String (optional, max 1000 chars)
  createdAt: Date (auto-generated)
  updatedAt: Date (auto-generated)
}
```

---

## 🛠️ Troubleshooting

### Error: "MongoServerError: Authentication failed"

**Solutions:**
1. Check username/password in connection string
2. Verify database user exists in Atlas
3. Ensure user has proper permissions

### Error: "MongooseServerSelectionError: connect ECONNREFUSED"

**Solutions:**
1. **Local MongoDB:** Make sure MongoDB service is running
   - Windows: Check Services app
   - macOS: `brew services start mongodb-community`
   - Linux: `sudo systemctl start mongod`

2. Check if port 27017 is correct

3. **Atlas:** Verify network access allows your IP address

### Error: "Cannot find module 'mongoose'"

**Solution:**
```bash
cd Server
npm install
```

### Error: "MONGODB_URI is not defined"

**Solution:**
1. Create `.env` file in `Server` folder
2. Add `MONGODB_URI=your_connection_string`
3. Make sure `dotenv` package is installed

### Database Not Connecting

**Check:**
1. MongoDB service is running (local) or cluster is active (Atlas)
2. Connection string is correct
3. Network/firewall allows connection
4. Environment variables are loaded (check server logs)

---

## 📝 API Endpoints

### POST `/api/contact`
Submit contact form - saves to MongoDB

### GET `/api/contacts`
Get all contacts from MongoDB

### GET `/api/contacts/:id`
Get a specific contact by ID

### DELETE `/api/contacts/:id`
Delete a contact by ID

---

## 🔄 Migration from JSON File

If you have existing contacts in `contacts.json`:

1. The old JSON file is no longer used
2. All new contacts go to MongoDB
3. To migrate old contacts, you can:
   - Create a migration script
   - Or manually re-enter important contacts through the form

---

## 🚀 Next Steps

1. **Backup:** Set up regular backups (Atlas has automatic backups on paid plans)
2. **Indexes:** Already added indexes on `email` and `createdAt` for performance
3. **Validation:** Schema validation is built-in with Mongoose
4. **Admin Panel:** Consider building an admin page to view/manage contacts

---

## 📚 Resources

- MongoDB Documentation: https://docs.mongodb.com/
- Mongoose Documentation: https://mongoosejs.com/docs/
- MongoDB Atlas: https://www.mongodb.com/cloud/atlas
- MongoDB University (Free Courses): https://university.mongodb.com/

---

**Need Help?** Check server terminal logs for detailed error messages!

