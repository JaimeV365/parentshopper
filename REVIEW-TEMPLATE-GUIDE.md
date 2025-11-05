# ParentShopper Review Template System

## Overview

This system provides a **unified, consistent structure** for all review pages, eliminating the inconsistencies and manual maintenance issues we've been experiencing.

## Critical Principles - MUST FOLLOW

### ⚠️ URL Naming Convention
- **NEVER include years in URLs**
- ✅ Correct: `best-high-chairs-uk.html`
- ❌ Wrong: `best-high-chairs-uk-2025.html` or `best-high-chairs-uk-2026.html`
- **Why:** URLs should be timeless. Years in titles are fine, but URLs should remain stable.

### ⚠️ Price Format - NO NUMERICAL PRICES
- **NEVER use actual prices or price ranges**
- ✅ Correct: "Premium choice", "Budget-friendly option", "Our recommendation", "Mid-range pick", "Value option"
- ❌ Wrong: "£89.99", "£50-£100", "Affordable", "Expensive"
- **Why:** Prices change constantly. Use descriptive positioning terms instead.

### ⚠️ Date Format
- Use current month/year when publishing
- Format: `YYYY-MM-DD` (e.g., `2025-11-15` for November 2025)
- The date will display as "Published: [Month] [Year]" (e.g., "Published: November 2025")

### ⚠️ Card Layout Balancing
- **"What We Learned" section:** Use **4 items** for balanced 2x2 grid layout
- **"What to Avoid" section:** Use **3 items** for balanced layout
- **"Final Verdict" section:** Use **4 verdicts** for balanced 2x2 grid layout
- **Why:** Unbalanced layouts (e.g., 3 cards in 2x2 or 4 cards in 3x2) look unprofessional

### ⚠️ Domain Usage
- **Always use:** `parentshopper.com`
- ❌ Never use: `parentshopper.co.uk`
- Applies to: canonical URLs, Open Graph URLs, Schema.org structured data, sitemap.xml

### ⚠️ Include Files
- **NEVER add YAML front matter to include files** (`_includes/*.html`)
- Include files should be pure HTML/Liquid templates
- Front matter belongs ONLY in the page files (`.html` files in `reviews/`)

## How It Works

### 1. **Unified Layout** (`_layouts/review.html`)
- All review pages use the same layout
- Consistent CSS loading and structure
- Automatic header, footer, and navigation

### 2. **Modular Components** (`_includes/`)
- `review-components.html` - Quick Answer section
- `product-review.html` - Individual product reviews
- `review-template.html` - Complete review structure

### 3. **Data-Driven Content**
- Reviews are defined in YAML front matter
- No more manual HTML editing
- Consistent structure enforced automatically

## Creating a New Review

### Step 1: Create the review file

**File Naming:**
- Format: `best-[product-name]-uk.html`
- Example: `best-high-chairs-uk.html`
- Location: `reviews/` directory

**YAML Front Matter Structure:**

```yaml
---
layout: review
title: "Best [Product] UK 2026: [Compelling Title]"
description: "[Brief description of review and key findings]"
category: "[Product Category]"
date: 2025-11-15  # Use current date (YYYY-MM-DD format)
read_time: 12
image: "[OG image URL - Amazon product image]"
keywords: "[Comma-separated keywords for SEO]"

# Quick Answer Section
quick_answer:
  subtitle: "Stop buying the wrong [product] for your lifestyle"
  product1:
    name: "[Product Name]"
    price: "Our recommendation"  # NO numerical prices!
    description: "[Brief description]"
    link: "[Amazon affiliate link with full referral code]"
    benefit1: "[Key benefit 1]"
    benefit2: "[Key benefit 2]"
    benefit3: "[Key benefit 3]"
  product2:
    name: "[Product Name]"
    price: "Budget-friendly option"  # NO numerical prices!
    description: "[Brief description]"
    link: "[Amazon affiliate link]"
    benefit1: "[Key benefit 1]"
    benefit2: "[Key benefit 2]"
    benefit3: "[Key benefit 3]"
  product3:
    name: "[Product Name]"
    price: "Premium choice"  # NO numerical prices!
    description: "[Brief description]"
    link: "[Amazon affiliate link]"
    benefit1: "[Key benefit 1]"
    benefit2: "[Key benefit 2]"
    benefit3: "[Key benefit 3]"
  summary: "[One-sentence summary of main conclusion]"

# Article Introduction
intro:
  - "[First paragraph - engaging hook]"
  - "[Second paragraph - what readers will learn]"

# Our Story Section
our_story:
  title: "Our Story: [Personal Experience Heading]"
  content:
    - "[Personal story paragraph 1]"
    - "[Personal story paragraph 2]"
    - "[Personal story paragraph 3]"

# Recommendations Section
recommendations:
  title: "Best [Product] UK 2026: Our Top [Number] Tested Recommendations"

# Products Array
products:
  - number: 1
    name: "[Product Name]"
    subtitle: "[Subtitle e.g., 'The Versatile Choice']"
    image: "[Amazon image URL]"
    alt: "[Descriptive alt text for accessibility]"
    rating: "★★★★★ (Editor's Choice)"
    price: "Our recommendation"  # NO numerical prices!
    verdict: "[Brief verdict statement]"
    verdict_2: "[Second verdict for context]"
    link: "[Amazon affiliate link]"
    specs:
      - name: "[Spec 1]"
        value: "[Value 1]"
      - name: "[Spec 2]"
        value: "[Value 2]"
      - name: "[Spec 3]"
        value: "[Value 3]"
      - name: "[Spec 4]"
        value: "[Value 4]"
    why_love: "[Why we love it paragraph 1]"
    why_love_2: "[Why we love it paragraph 2]"
    pros:
      - "[Pro 1 - specific benefit]"
      - "[Pro 2 - specific benefit]"
      - "[Pro 3 - specific benefit]"
      - "[Pro 4 - specific benefit]"
    cons:
      - "[Con 1 - honest drawback]"
      - "[Con 2 - honest drawback]"
      - "[Con 3 - honest drawback]"

# Comparison Table
comparison:
  title: "Quick Comparison: Best [Product] UK 2026"
  headers:
    - "[Product Category]"
    - "Price"
    - "[Key Spec 1]"
    - "[Key Spec 2]"
    - "Best For"
    - "Our Rating"
  rows:
    - highlight: true
      cells:
        - "<strong>[Product Name]</strong>"
        - "Our recommendation"  # NO numerical prices!
        - "[Spec Value]"
        - "[Spec Value]"
        - "[Best For description]"
        - "★★★★★"
    - highlight: false
      cells:
        - "<strong>[Product Name]</strong>"
        - "Budget-friendly option"  # NO numerical prices!
        - "[Spec Value]"
        - "[Spec Value]"
        - "[Best For description]"
        - "★★★★★"

# What We Learned - MUST HAVE 4 ITEMS FOR 2X2 GRID
learnings:
  title: "What We Learned: [Key Insights Heading]"
  items:
    - title: "[Insight 1 - e.g., 'Easy Cleaning Matters Most']"
      description: "[Description explaining why this insight matters]"
    - title: "[Insight 2]"
      description: "[Description]"
    - title: "[Insight 3]"
      description: "[Description]"
    - title: "[Insight 4]"
      description: "[Description]"

# What to Avoid - MUST HAVE 3 ITEMS FOR BALANCED LAYOUT
what_to_avoid:
  - title: "❌ [Mistake 1 - e.g., 'Buying Based on Looks Alone']"
    description: "[Explanation of why this is a mistake and what to do instead]"
  - title: "❌ [Mistake 2]"
    description: "[Explanation]"
  - title: "❌ [Mistake 3]"
    description: "[Explanation]"

# FAQ Section
faqs:
  - question: "[Question 1 - common parent concern]"
    answers:
      - "[Answer 1 - detailed with personal experience]"
      - "[Answer 2 - if multiple paragraphs needed]"
  - question: "[Question 2]"
    answers:
      - "[Answer]"

# Final Recommendation - MUST HAVE 4 VERDICTS FOR 2X2 GRID
final_recommendation:
  title: "Final Verdict: Best [Product] UK 2026 for Most Families"
  verdicts:
    - title: "Our Top Recommendation"
      content: "[Recommendation content for most families]"
    - title: "The Budget Reality"
      content: "[Budget option recommendation]"
    - title: "The Long-Term Investment"
      content: "[Premium option recommendation]"
    - title: "What We Gained"
      content: "[Summary of what readers gain from following recommendations]"
  messages:
    - "[Final message 1 - key takeaway]"
    - "[Final message 2 - call to action or reminder]"

# Related Articles (4 related reviews)
related_articles:
  - title: "Best [Related Product] UK 2026"
    url: "/reviews/best-[related-product]-uk.html"  # NO year in URL!
    image: "[Amazon product image URL]"
    alt: "Best [Related Product] UK 2026"
    description: "[Brief description of related article]"
  - title: "Best [Related Product 2] UK 2026"
    url: "/reviews/best-[related-product-2]-uk.html"  # NO year in URL!
    image: "[Amazon product image URL]"
    alt: "Best [Related Product 2] UK 2026"
    description: "[Brief description]"
  - title: "Best [Related Product 3] UK 2026"
    url: "/reviews/best-[related-product-3]-uk.html"  # NO year in URL!
    image: "[Amazon product image URL]"
    alt: "Best [Related Product 3] UK 2026"
    description: "[Brief description]"
  - title: "Best [Related Product 4] UK 2026"
    url: "/reviews/best-[related-product-4]-uk.html"  # NO year in URL!
    image: "[Amazon product image URL]"
    alt: "Best [Related Product 4] UK 2026"
    description: "[Brief description]"
---

{% include review-template.html %}
```

### Step 2: Update Internal Links

After creating the review, update these files to link to your new article:

1. **Homepage** (`index.html`)
   - Add to "Featured Reviews" section

2. **Reviews Index** (`reviews/index.html`)
   - Add under appropriate category (e.g., "Feeding")
   - Add to "Latest Reviews" if new

3. **Category Pages** (`categories/[category].html`)
   - Add product cards if relevant (e.g., feeding category for high chairs)

4. **Categories Index** (`categories/index.html`)
   - Add to "Featured Reviews" if desired

5. **Footer** (`_includes/footer.html`)
   - Add to reviews list

6. **Sitemap** (`sitemap.xml`)
   - Add URL entry (use `parentshopper.com` domain, NO year in URL)

### Step 3: Verify

Before publishing, verify:
- ✅ File name has NO year: `best-product-uk.html`
- ✅ All prices use descriptive terms (NO numbers)
- ✅ Date is current month/year
- ✅ "What We Learned" has exactly 4 items
- ✅ "What to Avoid" has exactly 3 items
- ✅ "Final Verdict" has exactly 4 verdicts
- ✅ All internal links use NO year in URLs
- ✅ All URLs use `parentshopper.com` domain
- ✅ No YAML front matter in include files

## Price Terminology Reference

Use these terms consistently:

- **"Our recommendation"** - Top pick (not necessarily most expensive)
- **"Premium choice"** - Most expensive/highest-end option
- **"Budget-friendly option"** - Lower-cost option
- **"Mid-range pick"** - Middle-tier option
- **"Value option"** - Good price-to-feature ratio
- **"Entry-level"** - Basic/starting option

**NEVER use:**
- Actual prices (£XX.XX)
- Price ranges (£XX-£XX)
- "Affordable" / "Expensive" (too vague)
- "Cheap" (negative connotation)

## Benefits

### 1. **Consistency Guaranteed**
- All reviews follow the same structure
- Standardized Quick Answer sections (always 3 products)
- Balanced card layouts (no awkward spacing)

### 2. **Error Prevention**
- Template enforces correct structure
- No more missing comparison tables
- Consistent image handling
- No years in URLs prevents broken links

### 3. **Easy Maintenance**
- Update template once, affects all reviews
- Add new features to all reviews automatically
- No more individual file updates
- Price changes don't require content updates

### 4. **Faster Creation**
- Copy YAML structure
- Fill in data from provided content and product table
- Done!

### 5. **SEO Optimized**
- Consistent URL structure (no year = evergreen)
- Proper Schema.org structured data
- Canonical URLs prevent duplicate content
- All optimizations built into template

## Workflow When Receiving Content

1. **Review the provided content document**
   - Extract the actual content/stories
   - Note the writing style and tone

2. **Review the product table**
   - Extract product names, Amazon links, images
   - Map to products in the YAML structure

3. **Create the review file**
   - Use the template structure above
   - Fill in YAML with provided content
   - **Do NOT use the content document's structure** - use our standardized YAML structure
   - Use content as filler, not as structural guide

4. **Apply principles**
   - Remove any prices from content → convert to descriptive terms
   - Remove any years from URLs
   - Balance card layouts (4/3/4 items)
   - Use current date

5. **Verify and publish**
   - Run through checklist
   - Build locally to test
   - Commit and push

## Example Usage

See `reviews/best-high-chairs-uk.html` for a complete, production-ready example of how to use this system correctly.

See `reviews/example-review.html` for a template example (update date before using).

## Common Mistakes to Avoid

1. ❌ Adding years to URLs
2. ❌ Using numerical prices
3. ❌ Unbalanced card layouts (wrong number of items)
4. ❌ Using old dates
5. ❌ Adding front matter to include files
6. ❌ Using `parentshopper.co.uk` instead of `parentshopper.com`
7. ❌ Following the content document's structure instead of our YAML template
8. ❌ Including "we researched X reviews" or similar claims

## Support

If you need help with the template system, refer to this guide or ask for assistance. The goal is to make review creation **foolproof** and **consistent**.
