# ⚡ Quick Deployment Guide

Fastest way to get your website live!

---

## 🎯 Recommended: Vercel + Railway

### Backend (Railway) - 5 Minutes

1. **Go to:** https://railway.app
2. **Sign up** with GitHub
3. **New Project** → Deploy from GitHub
4. **Select** your repository
5. **Set Root Directory** to `Server`
6. **Add Environment Variable:**
   ```
   MONGO_URI=your_mongodb_atlas_connection_string
   ```
7. **Deploy!** Copy the backend URL

### Frontend (Vercel) - 3 Minutes

1. **Go to:** https://vercel.com
2. **Sign up** with GitHub
3. **Import** your repository
4. **Framework:** Vite (auto-detected)
5. **Environment Variable:**
   ```
   VITE_API_URL=https://your-backend.railway.app
   ```
6. **Deploy!** Your site is live!

---

## ✅ That's It!

- **Frontend:** `https://your-project.vercel.app`
- **Backend:** `https://your-backend.railway.app`
- **Database:** MongoDB Atlas (already cloud)

---

## 📚 Full Guide

See `DEPLOYMENT_GUIDE.md` for detailed instructions and other platforms.


