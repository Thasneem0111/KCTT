# 🚀 Deploy KCTT to globcorp.com - Step by Step

## Method 1: Netlify (Recommended - 10 minutes)

### Step 1: Deploy to Netlify

1. Open your browser and go to **https://netlify.com**
2. Click **"Sign up"** (use GitHub, GitLab, or email)
3. After login, click **"Add new site"** → **"Deploy manually"**
4. **Drag and drop** your entire `KCTT` folder into the deployment area
5. Wait for deployment (usually 1-2 minutes)
6. **Copy your temporary URL** (e.g., `wonderful-site-123456.netlify.app`)

### Step 2: Add Your Custom Domain

1. In Netlify dashboard, click **"Site settings"**
2. Go to **"Domain management"**
3. Click **"Add custom domain"**
4. Enter: `globcorp.com`
5. Click **"Verify"** and **"Add domain"**
6. Also add `www.globcorp.com` (click "Add custom domain" again)

### Step 3: Configure DNS (Most Important Step)

Go to where you bought `globcorp.com` (your domain registrar) and log in:

**Add these DNS records:**

| Type  | Name | Value                      | TTL  |
| ----- | ---- | -------------------------- | ---- |
| A     | @    | 75.2.60.5                  | Auto |
| CNAME | www  | your-site-name.netlify.app | Auto |

**Replace `your-site-name.netlify.app` with your actual Netlify URL**

**Popular Registrars:**

- **GoDaddy:** My Products → DNS → Manage Zones
- **Namecheap:** Domain List → Manage → Advanced DNS
- **Cloudflare:** DNS → Records
- **Google Domains:** DNS → Custom resource records

### Step 4: Wait and Verify

1. **Wait 1-24 hours** for DNS to propagate worldwide
2. Check status in Netlify: Domain management should show green checkmarks
3. Visit `https://globcorp.com` - your site should load!

---

## Method 2: Quick Alternative - GitHub Pages

### If you prefer GitHub:

1. **Create GitHub account** if you don't have one
2. **Create new repository** called `kctt-website`
3. **Upload all your files** to the repository
4. Go to **Settings → Pages**
5. Enable Pages from **"Deploy from a branch"** → **"main"**
6. **DNS Configuration:** Same as above but use these values:

| Type  | Name | Value                  |
| ----- | ---- | ---------------------- |
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | yourusername.github.io |

---

## 📧 Email Setup (infokctt@globcorp.com)

Since your website uses `infokctt@globcorp.com`, you need email hosting:

### Option 1: Google Workspace (Recommended for Business)

1. Go to **workspace.google.com**
2. Start free trial with `globcorp.com`
3. Add MX records provided by Google
4. Create `infokctt@globcorp.com` mailbox

### Option 2: Zoho Mail (Free Option)

1. Go to **zoho.com/mail**
2. Sign up with your domain
3. Add MX records provided by Zoho
4. Create email accounts

---

## 🔍 How to Check if It's Working

### DNS Propagation Checkers:

- **https://whatsmydns.net** - Enter `globcorp.com`
- **https://dnschecker.org** - Check worldwide propagation

### Test Your Website:

1. Try `http://globcorp.com`
2. Try `https://globcorp.com`
3. Try `https://www.globcorp.com`
4. Test on mobile devices
5. Check all navigation links work

---

## 🆘 Troubleshooting

### Common Issues:

**"Site not found" or "DNS not found"**

- DNS hasn't propagated yet (wait 24-48 hours)
- Check DNS records are correct
- Try clearing browser cache

**"Not secure" warning**

- SSL certificate still generating (wait 1-2 hours)
- Force SSL in hosting platform settings

**Contact forms not working**

- Use Netlify Forms (automatic with Netlify)
- Or integrate Formspree/EmailJS

**Images not loading**

- Check file paths are correct
- Verify images uploaded properly

---

## 📞 Need Help?

1. **Netlify Support:** excellent documentation and live chat
2. **Your Domain Registrar:** contact support for DNS help
3. **DNS Issues:** Use online DNS checkers first
4. **Technical Issues:** Check browser console for errors

---

## 🎯 Expected Timeline

| Task              | Time                  |
| ----------------- | --------------------- |
| Deploy to Netlify | 5 minutes             |
| Add custom domain | 2 minutes             |
| Configure DNS     | 10 minutes            |
| DNS propagation   | 1-48 hours            |
| SSL certificate   | 1-2 hours after DNS   |
| Email setup       | 30 minutes - 24 hours |

**Total: Your website should be live at globcorp.com within 24 hours!**

---

## ✅ Final Checklist

- [ ] Deployed to hosting platform
- [ ] Custom domain globcorp.com added
- [ ] DNS A record pointing to hosting
- [ ] DNS CNAME for www subdomain
- [ ] SSL certificate active (https works)
- [ ] Email infokctt@globcorp.com working
- [ ] All pages load correctly
- [ ] Contact forms functional
- [ ] Mobile responsive
- [ ] All images display

**🎉 Congratulations! Your KCTT website is now live at globcorp.com!**
