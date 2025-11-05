# Migration Plan for Standalone HTML Review Files

## Overview
8 standalone HTML review files need to be updated to include the carousel and full optimizations. These files are fully static HTML and don't use Jekyll layouts.

## Files to Migrate

1. `best-baby-monitor-uk.html`
2. `best-baby-monitor-uk-2025.html`
3. `best-car-seats-uk.html`
4. `best-car-seats-uk-2025.html`
5. `best-nappy-bins-uk.html`
6. `best-nappy-bins-uk-2025.html`
7. `best-travel-cots-uk.html`
8. `best-travel-cots-uk-2025.html`

## Migration Options

### Option A: Add Carousel to Standalone Files (Recommended - Quick Fix)
**Pros:**
- Fastest solution
- Minimal changes needed
- Maintains existing structure

**Cons:**
- Requires manual HTML/JS addition
- No automatic SEO/accessibility improvements
- Duplicated code

**Steps:**
1. Add Swiper CSS link in `<head>` section
2. Add Swiper JS script before `</body>`
3. Add carousel HTML where related articles section exists
4. Add `related-articles-carousel.js` script
5. Update `_data/reviews.json` to include these pages

### Option B: Convert to Jekyll Layout (Recommended - Long-term)
**Pros:**
- Automatic carousel via include
- Automatic SEO/accessibility improvements
- Consistent structure
- Easier maintenance

**Cons:**
- More initial work
- Requires converting HTML structure to YAML front matter

**Steps:**
1. Extract content to YAML front matter
2. Convert HTML structure to use `layout: review`
3. Map content to template structure
4. Test each page

### Option C: Hybrid Approach
**Pros:**
- Quick carousel addition
- Gradual migration possible

**Cons:**
- Temporary solution

**Steps:**
1. Add carousel to standalone files (Option A)
2. Plan gradual migration to Option B

## Recommended Approach

**Phase 1 (Immediate):** Add carousel to standalone files
- Add Swiper CSS/JS
- Add carousel HTML structure
- Update `_data/reviews.json`

**Phase 2 (Future):** Convert to Jekyll layouts
- Migrate one file at a time
- Test thoroughly
- Update any internal links

## Implementation Template for Option A

### In `<head>` section:
```html
<!-- Swiper CSS for Related Articles Carousel -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" media="print" onload="this.media='all'">
<noscript>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
</noscript>
```

### Before `</body>`:
```html
<!-- Swiper JS for Related Articles Carousel -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script src="../js/related-articles-carousel.js"></script>
```

### Replace Related Articles section with:
```html
<!-- Related Articles Carousel -->
<section class="featured" aria-labelledby="related-articles-title">
    <div class="container">
        <h2 class="section-title" id="related-articles-title" style="text-align: center;">Related Articles</h2>
        
        <!-- Generate all reviews data for JavaScript -->
        <script type="application/json" id="all-reviews-data">
        [
            <!-- Will be populated by JavaScript from _data/reviews.json -->
        ]
        </script>

        <!-- Swiper Carousel Container -->
        <div class="swiper related-articles-swiper" id="related-articles-carousel" role="region" aria-label="Related articles carousel">
            <div class="swiper-wrapper" id="related-articles-wrapper" role="list">
                <!-- Fallback content -->
            </div>
            <button class="swiper-button-next" aria-label="Next related articles" type="button"></button>
            <button class="swiper-button-prev" aria-label="Previous related articles" type="button"></button>
            <div class="swiper-pagination" role="tablist" aria-label="Related articles pagination"></div>
        </div>
    </div>
</section>
```

## Notes

- All standalone files already have correct affiliate links (`tag=parentshopper-21`)
- Files need SEO enhancements (meta tags, structured data)
- Files need accessibility improvements (ARIA labels, semantic HTML)
- Consider creating a helper script to automate Option A implementation

