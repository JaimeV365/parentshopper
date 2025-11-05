# ParentShopper Review Template System

## Overview

This system provides a **unified, consistent structure** for all review pages, eliminating the inconsistencies and manual maintenance issues we've been experiencing.

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
```yaml
---
layout: review
title: "Best [Product] UK 2026: [Compelling Title]"
description: "[Brief description of review and key findings]"
category: "[Product Category]"
date: 2025-01-17
read_time: 12
image: "[OG image URL]"

# Quick Answer Section
quick_answer:
  subtitle: "Stop buying the wrong [product] for your lifestyle"
  product1:
    name: "[Product Name]"
    price: "Premium choice"
    description: "[Brief description]"
    link: "[Amazon link]"
    benefit1: "[Key benefit 1]"
    benefit2: "[Key benefit 2]"
    benefit3: "[Key benefit 3]"
  product2:
    name: "[Product Name]"
    price: "Budget-friendly option"
    description: "[Brief description]"
    link: "[Amazon link]"
    benefit1: "[Key benefit 1]"
    benefit2: "[Key benefit 2]"
    benefit3: "[Key benefit 3]"
  product3:
    name: "[Product Name]"
    price: "Budget-friendly option"
    description: "[Brief description]"
    link: "[Amazon link]"
    benefit1: "[Key benefit 1]"
    benefit2: "[Key benefit 2]"
    benefit3: "[Key benefit 3]"
  summary: "[One-sentence summary of main conclusion]"

# Article Introduction
intro:
  - "[First paragraph]"
  - "[Second paragraph]"

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
    subtitle: "[Subtitle]"
    image: "[Image URL]"
    alt: "[Alt text]"
    rating: "★★★★★ (Editor's Choice)"
    price: "Premium choice"
    verdict: "[Brief verdict]"
    verdict_2: "[Second verdict]"
    link: "[Amazon link]"
    specs:
      - name: "[Spec 1]"
        value: "[Value 1]"
      - name: "[Spec 2]"
        value: "[Value 2]"
    why_love: "[Why we love it paragraph 1]"
    why_love_2: "[Why we love it paragraph 2]"
    pros:
      - "[Pro 1]"
      - "[Pro 2]"
      - "[Pro 3]"
    cons:
      - "[Con 1]"
      - "[Con 2]"
      - "[Con 3]"

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
        - "Premium choice"
        - "[Spec Value]"
        - "[Spec Value]"
        - "[Best For]"
        - "★★★★★"

# What We Learned
learnings:
  title: "What We Learned: [Key Insights Heading]"
  items:
    - title: "[Insight 1]"
      description: "[Description]"
    - title: "[Insight 2]"
      description: "[Description]"

# FAQ Section
faqs:
  - question: "[Question 1]"
    answers:
      - "[Answer 1]"
      - "[Answer 2]"
  - question: "[Question 2]"
    answers:
      - "[Answer 1]"

# Final Recommendation
final_recommendation:
  title: "Final Verdict: Best [Product] UK 2026 for Most Families"
  verdicts:
    - title: "Our Top Recommendation"
      content: "[Recommendation content]"
  messages:
    - "[Final message 1]"
    - "[Final message 2]"

# Related Articles
related_articles:
  - title: "[Article Title]"
    url: "/reviews/[filename].html"
    image: "[Image URL]"
    alt: "[Alt text]"
    description: "[Description]"
---

{% include review-template.html %}
```

### Step 2: That's it!
The template system automatically generates the entire review page with:
- ✅ Consistent structure
- ✅ Proper CSS classes
- ✅ Standardized components
- ✅ No manual HTML editing needed

## Benefits

### 1. **Consistency Guaranteed**
- All reviews follow the same structure
- No more mixed `product-hero` vs `product-header`
- Standardized Quick Answer sections (always 3 products)

### 2. **Error Prevention**
- Template enforces correct structure
- No more missing comparison tables
- Consistent image handling

### 3. **Easy Maintenance**
- Update template once, affects all reviews
- Add new features to all reviews automatically
- No more individual file updates

### 4. **Faster Creation**
- Copy YAML structure
- Fill in data
- Done!

## Migration Strategy

### Phase 1: New Reviews
- All new reviews use the template system
- No more manual HTML creation

### Phase 2: Existing Reviews
- Gradually migrate existing reviews to YAML format
- Remove manual HTML maintenance

### Phase 3: Full Migration
- All reviews use unified system
- Maximum consistency and maintainability

## Example Usage

See `reviews/example-review.html` for a complete example of how to use this system.

## Support

If you need help with the template system, refer to this guide or ask for assistance. The goal is to make review creation **foolproof** and **consistent**.
