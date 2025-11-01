# ReviAI Deployment Checklist

## ✅ Pre-Deployment Checklist

### 1. Environment Setup
- [ ] Update `.env.local` with production API URL
- [ ] Verify all environment variables are set
- [ ] Test API connection to backend
- [ ] Ensure CORS is configured on backend

### 2. Code Cleanup
- [ ] Remove mock data from `app/editor/page.tsx`
- [ ] Remove console.log statements
- [ ] Update API error messages for production
- [ ] Review and update metadata in `app/layout.tsx`

### 3. Testing
- [ ] Test upload flow with real files
- [ ] Test AI command execution
- [ ] Test PDF export functionality
- [ ] Test dark mode toggle
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test all navigation links
- [ ] Test error handling
- [ ] Test with slow network connection

### 4. Performance
- [ ] Run `npm run build` successfully
- [ ] Check bundle size
- [ ] Optimize images in `/public`
- [ ] Enable compression on server
- [ ] Test page load times

### 5. Security
- [ ] Validate file uploads on backend
- [ ] Sanitize user inputs
- [ ] Set up rate limiting on API
- [ ] Enable HTTPS
- [ ] Review CORS settings

### 6. SEO & Metadata
- [ ] Update page titles
- [ ] Add meta descriptions
- [ ] Add Open Graph tags
- [ ] Add favicon
- [ ] Create robots.txt
- [ ] Create sitemap.xml

---

## 🚀 Deployment Steps

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login**
```bash
vercel login
```

3. **Deploy**
```bash
cd client
vercel
```

4. **Set Environment Variables**
- Go to Vercel dashboard
- Project Settings → Environment Variables
- Add: `NEXT_PUBLIC_API_URL=https://your-api.com/api`

5. **Deploy to Production**
```bash
vercel --prod
```

### Option 2: Netlify

1. **Install Netlify CLI**
```bash
npm i -g netlify-cli
```

2. **Build**
```bash
cd client
npm run build
```

3. **Deploy**
```bash
netlify deploy --prod
```

4. **Set Environment Variables**
- Netlify dashboard → Site settings → Environment variables
- Add: `NEXT_PUBLIC_API_URL`

### Option 3: Custom Server

1. **Build**
```bash
cd client
npm run build
```

2. **Upload Files**
- Upload entire `client/` folder
- Ensure `node_modules/` is included or run `npm install` on server

3. **Start Server**
```bash
npm start
```

4. **Configure Reverse Proxy** (Nginx example)
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🔧 Post-Deployment

### 1. Verification
- [ ] Visit production URL
- [ ] Test all pages load correctly
- [ ] Test upload functionality
- [ ] Test AI commands with real backend
- [ ] Test PDF export
- [ ] Check console for errors
- [ ] Test on multiple browsers
- [ ] Test on mobile devices

### 2. Monitoring
- [ ] Set up error tracking (Sentry, LogRocket)
- [ ] Set up analytics (Google Analytics, Plausible)
- [ ] Monitor API response times
- [ ] Set up uptime monitoring
- [ ] Configure alerts for errors

### 3. Performance
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Optimize images if needed
- [ ] Enable CDN if available
- [ ] Test page speed

### 4. Documentation
- [ ] Update README with production URL
- [ ] Document deployment process
- [ ] Create user guide
- [ ] Document API endpoints
- [ ] Create troubleshooting guide

---

## 📋 Environment Variables

### Development (`.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Production
```env
NEXT_PUBLIC_API_URL=https://api.yourapp.com/api
```

---

## 🐛 Common Issues & Solutions

### Issue: API calls failing
**Solution:**
- Check CORS settings on backend
- Verify API URL in environment variables
- Check network tab in browser dev tools

### Issue: Build fails
**Solution:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Issue: Styles not loading
**Solution:**
- Clear browser cache
- Check Tailwind config
- Verify `globals.css` is imported

### Issue: Dark mode not persisting
**Solution:**
- Check Zustand store initialization
- Verify localStorage is available
- Check browser console for errors

---

## 📊 Performance Targets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

---

## 🔒 Security Checklist

- [ ] HTTPS enabled
- [ ] CORS properly configured
- [ ] File upload validation
- [ ] Input sanitization
- [ ] Rate limiting on API
- [ ] No sensitive data in client code
- [ ] Environment variables secured
- [ ] Dependencies up to date

---

## 📱 Browser Support

Tested and working on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## 🎯 Launch Checklist

### Pre-Launch
- [ ] All features tested
- [ ] Backend connected
- [ ] Mock data removed
- [ ] Environment variables set
- [ ] Build successful
- [ ] Performance optimized

### Launch Day
- [ ] Deploy to production
- [ ] Verify all pages work
- [ ] Test critical user flows
- [ ] Monitor error logs
- [ ] Check analytics setup
- [ ] Announce launch

### Post-Launch
- [ ] Monitor user feedback
- [ ] Track error rates
- [ ] Review performance metrics
- [ ] Plan improvements
- [ ] Update documentation

---

## 📞 Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Support**: https://vercel.com/support
- **Tailwind Docs**: https://tailwindcss.com/docs
- **React Query**: https://tanstack.com/query/latest

---

## 🎉 You're Ready!

Once all items are checked, your ReviAI frontend is ready for production deployment.

**Good luck with your launch!** 🚀
