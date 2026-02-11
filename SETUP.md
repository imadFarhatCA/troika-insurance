# Troika Insurance - Setup Guide

## ✅ Completed Setup

- ✅ SvelteKit project with TypeScript initialized
- ✅ Cloudflare Pages adapter configured
- ✅ Comprehensive SEO meta tags added
- ✅ Open Graph tags for social media sharing
- ✅ Twitter Card tags
- ✅ Schema.org structured data (InsuranceAgency, WebSite)
- ✅ Professional landing page with responsive design
- ✅ Git repository initialized
- ✅ Initial build successful

## 🎨 Design & Content

### Current Features
- **Hero Section**: Eye-catching gradient background with CTA buttons
- **Services Grid**: 6 service cards (Health, Life, Property, Business, Auto, Liability)
- **About Section**: 3 key value propositions
- **Contact Section**: Contact information display
- **Responsive Design**: Mobile-friendly layout

### Customization Needed

1. **Replace Placeholder Content**
   - Update contact information in [src/routes/+page.svelte](src/routes/+page.svelte)
   - Replace phone: `+1 (555) 123-4567`
   - Replace email: `info@troikainsurance.com`
   - Add real business hours

2. **Update SEO Metadata**
   - Edit [src/app.html](src/app.html) with actual:
     - Website URL (currently: troikainsurance.com)
     - Business phone number
     - Business email
     - Physical address (if applicable)
     - Social media links

3. **Add Branding**
   - Create and add company logo to `/static/favicon.svg`
   - Create Open Graph image (`/static/og-image.jpg` - 1200x630px)
   - Create Apple Touch icon (`/static/apple-touch-icon.png` - 180x180px)

## 🚀 Deployment to Cloudflare Pages

### Prerequisites
- GitHub account
- Cloudflare account

### Steps

1. **Create GitHub Repository**
   ```bash
   # Create a new repository on GitHub, then:
   cd "/Users/imadfarhat/imadFarhat projects/Troika Insurance"
   git remote add origin https://github.com/YOUR_USERNAME/troika-insurance.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Pages
   - Click "Create a project"
   - Connect your GitHub repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Build output directory**: `.svelte-kit/cloudflare`
     - **Framework preset**: SvelteKit

3. **Environment Variables** (if needed)
   - No environment variables required for basic setup

4. **Custom Domain** (optional)
   - In Cloudflare Pages, go to your project
   - Click "Custom domains"
   - Add your domain (e.g., www.troikainsurance.com)
   - Update DNS records as instructed

## 📋 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run check

# Type checking with watch mode
npm run check:watch
```

## 📊 SEO Optimization

### Next Steps

1. **Google Search Console**
   - Sign up at https://search.google.com/search-console
   - Add your domain
   - Verify ownership (DNS method)
   - Submit sitemap: https://yourdomain.com/sitemap.xml

2. **Google Business Profile**
   - Create/claim at https://business.google.com
   - Add business information
   - Upload photos
   - Collect customer reviews

3. **Content Recommendations**
   - Add a blog for SEO content
   - Create an FAQ page
   - Add customer testimonials
   - Create detailed service pages

### Target Keywords
- Insurance solutions
- [Your location] insurance
- Life insurance
- Health insurance
- Business insurance
- Property insurance

## 🎯 Future Enhancements

- [ ] Add insurance quote calculator
- [ ] Create individual service pages
- [ ] Add customer testimonials section
- [ ] Implement contact form with email service
- [ ] Add live chat integration
- [ ] Create claims process guide
- [ ] Add insurance glossary/FAQ
- [ ] Integrate with CRM system
- [ ] Add multi-language support
- [ ] Create insurance comparison tools

## 📱 Testing

Before deploying:
1. Test on mobile devices
2. Check all links work
3. Verify contact information is correct
4. Test in different browsers
5. Validate HTML and SEO tags
6. Check page load speed

## 🔒 Security

- SSL certificate automatically provided by Cloudflare
- No sensitive data stored client-side
- Form submissions should use server-side validation
- Regular dependency updates recommended

---

Last Updated: February 2026
