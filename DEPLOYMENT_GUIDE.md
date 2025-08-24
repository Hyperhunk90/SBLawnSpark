# 🚀 Cloudflare Pages Deployment Guide

## Prerequisites
- You have your domain already connected to Cloudflare
- You have access to your Cloudflare account
- Git is installed on your local machine

## Option 1: Deploy via GitHub Integration (Recommended)

### 1. **Connect Repository to Cloudflare Pages**
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** in the left sidebar
3. Click **Create a project**
4. Choose **Connect to Git**
5. Select **GitHub** and authorize Cloudflare
6. Choose your repository: `Hyperhunk90/SBLawnSpark`

### 2. **Configure Build Settings**
```
Build command: npm run build
Build output directory: dist
Root directory: (leave empty)
Environment variables: (none required)
```

### 3. **Advanced Settings**
- **Node.js version**: 18 or later
- **Build timeout**: 10 minutes
- **Functions**: Enabled

### 4. **Custom Domain**
After deployment:
1. Go to your Pages project
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Add your domain
5. Cloudflare will automatically handle DNS

---

## Option 2: Deploy via Wrangler CLI

### 1. **Install Wrangler Locally**
```bash
npm install -g wrangler
# or
npx wrangler --version
```

### 2. **Authenticate**
```bash
wrangler login
```
This will open a browser to authenticate with your Cloudflare account.

### 3. **Update Project Name**
Edit `wrangler.jsonc` and change the name to match your domain or preferred project name:
```json
{
  "name": "southern-buck-lawn-care",  // Change this to your preferred name
  "compatibility_date": "2025-08-23",
  "pages_build_output_dir": "./dist",
  "compatibility_flags": ["nodejs_compat"]
}
```

### 4. **Deploy**
```bash
# First build the project
npm run build

# Deploy to Cloudflare Pages
npm run deploy
# or directly:
wrangler pages deploy dist --project-name=your-project-name
```

---

## Option 3: Manual Upload

### 1. **Build Locally**
```bash
git clone https://github.com/Hyperhunk90/SBLawnSpark.git
cd SBLawnSpark
npm install
npm run build
```

### 2. **Upload via Dashboard**
1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Click **Create a project**
3. Choose **Upload assets**
4. Upload the entire `dist` folder contents
5. Set project name and deploy

---

## 🛠️ Build Configuration

Your project is configured with:

### **Package.json Scripts**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build", 
    "preview": "wrangler pages dev dist",
    "deploy": "npm run build && wrangler pages deploy dist"
  }
}
```

### **Build Output**
- **Directory**: `dist/`
- **Assets**: HTML, CSS, JS, images
- **Worker**: Cloudflare Worker for API endpoints

---

## 🌐 Domain Configuration

### **If Domain is Already Connected:**
1. Your domain should automatically work after deployment
2. SSL certificates are automatically provisioned
3. DNS is managed by Cloudflare

### **If You Need to Add Domain:**
1. Go to Pages project dashboard
2. **Custom domains** → **Set up custom domain**
3. Enter your domain name
4. Follow DNS configuration instructions

---

## 📈 Post-Deployment Checklist

### ✅ **Verify Deployment**
- [ ] Website loads correctly
- [ ] All sections display properly
- [ ] Contact form works
- [ ] Mobile responsiveness
- [ ] Performance scores (Lighthouse)

### ✅ **SEO & Analytics**
- [ ] Add Google Analytics
- [ ] Set up Google Search Console
- [ ] Update meta tags with real business info
- [ ] Add structured data markup

### ✅ **Content Updates**
- [ ] Replace placeholder images
- [ ] Update contact information
- [ ] Customize service descriptions
- [ ] Add real testimonials
- [ ] Update business hours

---

## 🔧 Environment Variables

Currently no environment variables are required, but you may want to add:

```env
# Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Form handling
CONTACT_FORM_ENDPOINT=your-form-endpoint

# Business info
BUSINESS_PHONE=+1234567890
BUSINESS_EMAIL=info@yourdomain.com
```

Add these in Cloudflare Pages dashboard under **Settings** → **Environment variables**.

---

## 🚨 Troubleshooting

### **Build Fails**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### **Deployment Issues**
- Check build output directory is `dist`
- Verify all files are committed to Git
- Ensure Node.js version compatibility

### **Domain Not Working**
- Check DNS settings in Cloudflare
- Verify SSL certificate status
- Wait up to 24 hours for propagation

---

## 📞 Support

For deployment issues:
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)
- [GitHub Repository](https://github.com/Hyperhunk90/SBLawnSpark)

**Ready to launch your premium lawn care website! 🌱**