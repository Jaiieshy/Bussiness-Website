# 🚀 Complete Deployment Guide

Step-by-step guide to deploy your New Deepak Marble website to production.

---

## 📋 Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Option 1: Vercel (Frontend) + Railway (Backend)](#option-1-vercel--railway-recommended)
3. [Option 2: Netlify (Frontend) + Render (Backend)](#option-2-netlify--render)
4. [Option 3: Railway (Both)](#option-3-railway-all-in-one)
5. [Post-Deployment](#post-deployment)

---

## ✅ Pre-Deployment Checklist

### 1. MongoDB Atlas Setup (Required)
- [ ] MongoDB Atlas account created
- [ ] Cluster created and running
- [ ] Database user created
- [ ] Network access configured
- [ ] Connection string saved

### 2. Code Updates (Already Done ✅)
- [x] Frontend uses environment variables for API URL
- [x] Backend uses environment variables for MongoDB

### 3. Build Testing
```bash
# Test frontend build
npm run build

# Test backend build
cd Server
npm run build
```

---

## 🎯 Option 1: Vercel (Frontend) + Railway (Backend) ⭐ RECOMMENDED

### Why This Combo?
- ✅ **Vercel:** Best for React/Vite, automatic SSL, fast CDN
- ✅ **Railway:** Easy backend deployment, free tier
- ✅ **Simple:** Separate concerns, easier to manage

---

### Part A: Deploy Backend to Railway

#### Step 1: Prepare Backend

1. **Create `Server/.env` file** (if not exists):
   ```env
   MONGO_URI=your_mongodb_atlas_connection_string
   PORT=4000
   NODE_ENV=production
   ```

2. **Test build locally:**
   ```bash
   cd Server
   npm run build
   ```

#### Step 2: Deploy to Railway

1. **Sign up at Railway:**
   - Go to: https://railway.app
   - Click "Start a New Project"
   - Sign up with GitHub (recommended)

2. **Create New Project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your GitHub account
   - Select your repository

3. **Configure Service:**
   - Railway will detect your project
   - Select "Server" folder as root directory
   - Or create a service and set root to `Server`

4. **Add Environment Variables:**
   - Go to "Variables" tab
   - Add:
     ```
     MONGO_URI=your_mongodb_atlas_connection_string
     PORT=4000
     NODE_ENV=production
     ```

5. **Deploy:**
   - Railway will automatically build and deploy
   - Wait for deployment to complete
   - Note your backend URL (e.g., `https://your-app.railway.app`)

6. **Get Backend URL:**
   - Go to "Settings" → "Generate Domain"
   - Copy the URL (e.g., `https://deepak-marble-api.railway.app`)

---

### Part B: Deploy Frontend to Vercel

#### Step 1: Update Frontend Environment

1. **Create `.env.production` file** (optional, can set in Vercel):
   ```env
   VITE_API_URL=https://your-backend.railway.app
   ```

2. **Test build:**
   ```bash
   npm run build
   ```

#### Step 2: Deploy to Vercel

1. **Sign up at Vercel:**
   - Go to: https://vercel.com
   - Click "Sign Up"
   - Sign up with GitHub (recommended)

2. **Import Project:**
   - Click "Add New" → "Project"
   - Import your GitHub repository

3. **Configure Project:**
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (root)
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`

4. **Add Environment Variables:**
   - Go to "Environment Variables"
   - Add:
     ```
     VITE_API_URL=https://your-backend.railway.app
     ```
   - Replace with your actual Railway backend URL

5. **Deploy:**
   - Click "Deploy"
   - Wait for deployment (2-3 minutes)
   - Your site will be live at `https://your-project.vercel.app`

---

## 🎯 Option 2: Netlify (Frontend) + Render (Backend)

### Part A: Deploy Backend to Render

1. **Sign up at Render:**
   - Go to: https://render.com
   - Sign up with GitHub

2. **Create Web Service:**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

3. **Configure:**
   - **Name:** `deepak-marble-api`
   - **Root Directory:** `Server`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Environment:** `Node`

4. **Environment Variables:**
   ```
   MONGO_URI=your_mongodb_atlas_connection_string
   PORT=4000
   NODE_ENV=production
   ```

5. **Deploy:**
   - Click "Create Web Service"
   - Note your backend URL (e.g., `https://deepak-marble-api.onrender.com`)

### Part B: Deploy Frontend to Netlify

1. **Sign up at Netlify:**
   - Go to: https://netlify.com
   - Sign up with GitHub

2. **Add New Site:**
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub repository

3. **Build Settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
   - **Base directory:** `./`

4. **Environment Variables:**
   - Go to "Site settings" → "Environment variables"
   - Add:
     ```
     VITE_API_URL=https://your-backend.onrender.com
     ```

5. **Deploy:**
   - Click "Deploy site"
   - Your site will be live!

---

## 🎯 Option 3: Railway (All-in-One)

Deploy both frontend and backend on Railway.

### Step 1: Create Two Services

1. **Backend Service:**
   - Root: `Server`
   - Build: `npm install && npm run build`
   - Start: `npm start`
   - Port: `4000`
   - Env: `MONGO_URI=...`

2. **Frontend Service:**
   - Root: `./`
   - Build: `npm install && npm run build`
   - Start: `npx serve -s build -l 3000`
   - Port: `3000`
   - Env: `VITE_API_URL=https://backend-service.railway.app`

### Step 2: Configure Services

- Create separate services in Railway
- Link them using internal networking
- Configure environment variables

---

## ✅ Post-Deployment

### 1. Test Your Deployment

**Frontend:**
- Visit your deployed frontend URL
- Test navigation
- Test contact form submission

**Backend:**
- Visit: `https://your-backend-url/api/contacts`
- Should return JSON (empty array initially)

**MongoDB:**
- Submit contact form
- Check MongoDB Atlas dashboard
- Verify contact is saved

### 2. Update CORS (If Needed)

If you get CORS errors, update `Server/index.ts`:

```typescript
app.use(cors({
  origin: ['https://your-frontend-url.vercel.app', 'http://localhost:3000'],
  credentials: true
}));
```

### 3. Custom Domain (Optional)

**Vercel:**
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records

**Railway:**
- Go to Service Settings → Networking
- Add custom domain

---

## 🔧 Environment Variables Summary

### Frontend (.env or Platform Settings)
```env
VITE_API_URL=https://your-backend-url.railway.app
```

### Backend (Platform Settings)
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/newdeepakmarble
PORT=4000
NODE_ENV=production
```

---

## 🛠️ Troubleshooting

### Issue: Frontend can't connect to backend

**Solution:**
- Check `VITE_API_URL` environment variable
- Verify backend URL is correct (no trailing slash)
- Check CORS settings in backend
- Verify backend is deployed and running

### Issue: Backend can't connect to MongoDB

**Solution:**
- Verify `MONGO_URI` is correct
- Check MongoDB Atlas network access (allow all IPs for dev)
- Verify database user credentials

### Issue: Build fails

**Solution:**
- Check build logs in deployment platform
- Verify all dependencies are in `package.json`
- Test build locally first: `npm run build`

---

## 📊 Recommended Deployment Summary

**For Most Users:**
- **Frontend:** Vercel (easiest, best performance)
- **Backend:** Railway (simple, good free tier)
- **Database:** MongoDB Atlas (already cloud)

**For Beginners:**
- **Everything:** Railway (single platform)

**For Advanced Users:**
- **Frontend:** Vercel or Netlify
- **Backend:** Railway, Render, or Fly.io
- **Database:** MongoDB Atlas

---

## 🎉 You're Live!

After deployment:
- ✅ Frontend: `https://your-frontend.vercel.app`
- ✅ Backend: `https://your-backend.railway.app`
- ✅ Database: MongoDB Atlas (cloud)

Your website is now live on the internet! 🚀

---

**Need help?** Check deployment platform documentation or error logs!
