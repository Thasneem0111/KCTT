# 🌐 Hosting KCTT Website on globcorp.com

## Overview

This guide will help you deploy your KCTT website to your custom domain `globcorp.com` using the best hosting platforms.

## 🚀 Recommended Hosting Options for Custom Domains

### Option 1: Netlify + globcorp.com (Recommended)

**Why Netlify?**

- ✅ Free SSL certificate for globcorp.com
- ✅ Global CDN for fast worldwide access
- ✅ Easy custom domain setup
- ✅ Automatic form handling
- ✅ Continuous deployment

**Steps to Deploy:**

1. **Deploy to Netlify:**

   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Drag & drop your KCTT folder
   - Your site gets a temporary URL like `kctt-123456.netlify.app`

2. **Add Custom Domain:**

   - In Netlify dashboard → Site settings → Domain management
   - Click "Add custom domain"
   - Enter: `globcorp.com`
   - Also add: `www.globcorp.com`

3. **Configure DNS Records:**
   Go to your domain registrar (where you bought globcorp.com) and add these DNS records:

   **For Root Domain (globcorp.com):**

   ```
   Type: A
   Name: @ (or leave blank)
   Value: 75.2.60.5
   ```

   **For WWW Subdomain:**

   ```
   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   ```

   **Alternative (if A record doesn't work):**

   ```
   Type: ALIAS or ANAME (if supported)
   Name: @
   Value: your-site-name.netlify.app
   ```

4. **SSL Certificate:**
   - Netlify automatically provides free SSL
   - Your site will be accessible at `https://globcorp.com`

### Option 2: Vercel + globcorp.com

**Steps:**

1. Deploy to Vercel (vercel.com)
2. Add domain in project settings
3. Configure DNS:

   ```
   Type: A
   Name: @
   Value: 76.76.19.61

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Option 3: GitHub Pages + globcorp.com

**Steps:**

1. Push code to GitHub repository
2. Enable GitHub Pages
3. Add CNAME file with `globcorp.com`
4. Configure DNS:

   ```
   Type: A
   Name: @
   Values:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153

   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

### Option 4: Traditional Web Hosting

**If you have web hosting with your domain provider:**

1. Access cPanel/hosting control panel
2. Upload files to `public_html` or `www` directory
3. Domain should work immediately

## 🔧 DNS Configuration Guide

### Common Domain Registrars:

**GoDaddy:**

1. Login → My Products → DNS
2. Add/modify A and CNAME records as above

**Namecheap:**

1. Domain List → Manage → Advanced DNS
2. Add records as specified above

**Cloudflare:**

1. DNS settings → Add records
2. Make sure proxy status is appropriate

**Google Domains:**

1. DNS → Custom resource records
2. Add the required records

## 📧 Email Configuration (infokctt@globcorp.com)

Since your website shows `infokctt@globcorp.com`, you'll need email hosting:

**Options:**

1. **Google Workspace** (recommended for business)
2. **Microsoft 365**
3. **Your domain provider's email service**
4. **Zoho Mail** (free tier available)

**Email DNS Records (example for Google Workspace):**

```
Type: MX
Priority: 1
Value: aspmx.l.google.com

Type: MX
Priority: 5
Value: alt1.aspmx.l.google.com
```

## 🚀 Quick Deployment Steps

### Fastest Method (Netlify):

```bash
# 1. Go to netlify.com and drag your KCTT folder
# 2. Note your temporary URL (e.g., kctt-123456.netlify.app)
# 3. Add globcorp.com as custom domain
# 4. Update DNS records with your registrar
# 5. Wait 24-48 hours for DNS propagation
```

## 🔒 Security & Performance Features

Your deployment includes:

- **SSL/HTTPS** - Automatic encryption
- **Security Headers** - XSS protection, content security policy
- **Caching** - Optimized loading speeds
- **CDN** - Global content delivery
- **Compression** - Smaller file sizes

## 📞 Contact Form Setup

Your contact forms will work with:

1. **Netlify Forms** (automatic if using Netlify)
2. **Formspree** - Add to form action
3. **EmailJS** - JavaScript-based sending

## ✅ Pre-Launch Checklist

- [ ] Website deployed to hosting platform
- [ ] Custom domain (globcorp.com) added
- [ ] DNS records configured
- [ ] SSL certificate active
- [ ] Email (infokctt@globcorp.com) configured
- [ ] Contact forms functional
- [ ] All pages loading correctly
- [ ] Mobile responsiveness tested

## 🕒 Timeline

- **Deployment:** 5-10 minutes
- **DNS Propagation:** 24-48 hours
- **SSL Certificate:** 1-2 hours after DNS
- **Email Setup:** 1-24 hours

## 📞 Support

If you need help:

1. Check your domain registrar's DNS management guide
2. Contact your hosting platform's support
3. Use online DNS propagation checkers
4. Consider hiring a developer for complex setups

## 🎯 Final Recommendation

**Use Netlify** for the easiest setup with globcorp.com:

- Most reliable custom domain support
- Automatic SSL certificates
- Best documentation and support
- Free tier is very generous

Your website will be live at `https://globcorp.com` once DNS propagates!
