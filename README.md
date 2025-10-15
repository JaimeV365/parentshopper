# ParentShopper - Static Affiliate Website

A high-performance static affiliate website for parenting product recommendations, built with privacy-first principles and mobile-first design.

## Project Overview

ParentShopper is a shopping guide and personal buying assistant for parents across Europe/UK. The site helps busy parents make smart purchasing decisions for baby and child products through honest recommendations and real parent experiences.

**Approach:** Privacy-first (no user data collection), mobile-optimized, research-focused

## Technology Stack

- **Frontend:** Pure HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Custom CSS with CSS Custom Properties (no frameworks)
- **Fonts:** Google Fonts (Outfit for headings, Inter for body text)
- **Hosting:** GitHub Pages (free tier)
- **Deployment:** GitHub integration with automatic SSL and global CDN

## File Structure

```
/
├── index.html                    # Homepage
├── about.html                    # About page
├── affiliate-disclosure.html     # Affiliate disclosure
├── sitemap.xml                   # XML sitemap
├── robots.txt                    # Search engine directives
├── README.md                     # This file
├── categories/                   # Category pages
│   ├── pushchairs.html
│   ├── car-seats.html
│   ├── feeding.html
│   ├── sleep.html
│   └── safety.html
├── reviews/                      # Product review articles
│   ├── index.html               # Reviews index page
│   ├── best-baby-monitor-uk-2025.html
│   ├── best-pushchairs-uk-2025.html
│   └── best-pushchairs-uk-2025.html
├── guides/                       # Buying guide articles
│   └── first-time-parents.html
├── css/                          # Stylesheets
│   ├── styles.css               # Main stylesheet
│   ├── category.css             # Category page styles
│   ├── review.css               # Review article styles
│   └── guide.css                # Guide article styles
├── js/                          # JavaScript files
│   ├── main.js                  # Main JavaScript
│   └── category.js              # Category page functionality
└── images/                      # Image assets
    ├── products/                # Product images
    └── brand/                   # Brand assets
```

## Brand Guidelines

### Colors
- **Primary:** #1F2937 (Dark Grey) - professional, trustworthy
- **Secondary:** #4B5563 (Medium Grey) - neutral, modern
- **Accent:** #F59E0B (Golden Amber) - CTAs, highlights
- **Success:** #059669 (Dark Green) - recommended badges
- **Background:** #FFFFFF with subtle off-white #F8FAFC

### Typography
- **Headers:** Outfit (Google Fonts) - weights 400, 500, 600
- **Body:** Inter (Google Fonts) - weights 400, 500

### Voice & Tone
- Trustworthy research expert, efficient, practical parent
- Professional but approachable
- Honest about product limitations
- Respects busy parents' time

## Content Guidelines

### Writing Style
- Authentic parent sharing real experience
- Thorough researcher when personal experience isn't available
- Problem-focused rather than product-focused
- Honest about limitations as well as benefits

### DO Use:
- "We researched 15 pushchairs..."
- "After analyzing hundreds of parent reviews..."
- "Real parents consistently report..."
- "Here's what actually matters for busy parents..."

### DON'T Use:
- Overly sales-y language ("You MUST buy this!")
- Vague authority claims without citations
- False urgency ("Limited time only!")
- Generic marketing speak

## Adding New Content

### 1. Adding a New Category Page

1. Create a new HTML file in the `categories/` directory
2. Use the existing category pages as templates
3. Update the navigation in all pages
4. Add the new page to `sitemap.xml`

### 2. Adding a New Review Article

#### Comparison Review (Most Common)
1. Create a new HTML file in the `reviews/` directory
2. Use `best-baby-monitor-uk-2025.html` as a template
3. Structure should include:
   - Quick Answer Box (30-second solution)
   - Problem Explanation
   - Top 3-5 Product Recommendations with pros/cons
   - Comparison Table
   - What to Avoid section
   - How We Choose / Research Methodology
   - FAQ section (5 questions)

#### Individual Product Review
1. Create a new HTML file in the `reviews/` directory
2. Use `best-pushchairs-uk-2025.html` as a template
3. Structure should include:
   - Product hero section with verdict
   - Quick Facts box
   - Real Parent Experience section
   - Detailed Analysis
   - Alternative Options
   - FAQ section

### 3. Adding a New Buying Guide

1. Create a new HTML file in the `guides/` directory
2. Use `first-time-parents.html` as a template
3. Structure should include:
   - Problem statement
   - Top 3 picks
   - Decision framework
   - Essential products checklist
   - What to avoid
   - Budget breakdown
   - FAQ section
   - Clear next steps

### 4. SEO Requirements

Every page must include:
- Proper meta tags (title, description, og tags)
- Schema markup for product reviews and FAQs
- Clean URL structure
- Internal linking strategy
- Alt text for images (when added)

## Performance Requirements

- **Page load time:** Under 2 seconds
- **Mobile PageSpeed score:** 90+
- **Core Web Vitals:** All green
- **Images:** WebP format with lazy loading
- **JavaScript:** Minimal, only essential interactions

## Deployment

### GitHub Pages Setup
1. Repository is already connected to GitHub
2. Enable GitHub Pages in repository settings
3. Set source to "Deploy from a branch" → "main"
4. Site will be available at: `https://jaimev365.github.io/parentshopper/`

### GitHub Workflow
1. Make changes locally
2. Commit and push to main branch
3. GitHub Pages automatically deploys changes
4. Check deployment status in repository Actions tab

## Maintenance

### Regular Tasks
- Update product prices and availability
- Add new product reviews
- Update affiliate links if needed
- Monitor site performance
- Check for broken links

### Content Updates
- Review and update existing articles quarterly
- Add new products based on parent requests
- Update safety information as needed
- Refresh comparison tables with new products

## Success Criteria

The site is successful if:
- **Performance:** Every page loads in under 2 seconds
- **Mobile:** Perfect experience on all devices
- **Conversion:** Clear path from article → affiliate links
- **Trust:** Professional, credible, honest tone throughout
- **Usability:** Any product recommendation reachable in 3 clicks or fewer
- **SEO:** Clean markup, proper meta tags, schema markup
- **Maintainability:** Easy to add new articles without technical expertise

---

**Last Updated:** January 2025  
**Version:** 1.0.0
